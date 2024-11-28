import {IFormInput} from "pages/main";
import {useEffect, useState} from "react";
import {numberComma} from "../utils/helpers";

interface IFromInputProps {
    list: IFormInput[];
}

interface IFormResultProps {
    existCount: number;
    existPrice: number;
    existTotal: number;
    addCount: number;
    addPrice: number;
    addTotal: number;
    currentPrice?: number;
}

function StockCalcList({ list }: IFromInputProps) {
    const [resultList, setResultList] = useState<IFormResultProps[]>([]);
    
    // const convertedData = (item: IFormInput) => {
    //     const newItem = {};
    //     for (const key in item) {
    //         const value = item[key];
    //         newItem[key] = value === "" ? 0 : Number(value.replace(/,/g, ""));
    //     }
    //     return newItem;
    // }
    
    // 숫자로 변환하는 함수 (쉼표 제거하고 숫자 변환)
    const parseNumber = (num) => {
        return Number(num.replace(/,/g, ''));
    }
    
    useEffect(() => {
        //newItem이 {} 아니라 [{}] 되어야함
        const newItem:any = {};
        list.map((item) => {
            if(item){
                for (const key in item) {
                    const value = item[key];
                    newItem[key] = value === "" ? 0 : Number(value.replace(/,/g, ""));
                }
            }
            return newItem;
        })

        setResultList(newItem);
    }, [list]);
    
    console.log(resultList)
    
    return (
        <>
            <hr className="divider" />
            <div className="result-wrap">
                <p className="sec-tit">평균 단가</p>
                <ul className="list">
                    {resultList?.map((item, idx) => (
                        <li key={idx} className="item">
                            <div className="gray-box">
                                <dl>
                                    <dt>수량</dt>
                                    <dd>{numberComma(item.existCount + item.addCount)}</dd>
                                </dl>
                                <dl>
                                    <dt>평균 단가</dt>
                                    <dd>
                                        {numberComma((item.existTotal + item.addTotal) / (item.existCount + item.addCount))}
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>총 가격</dt>
                                    <dd>
                                        {numberComma((item.existCount + item.addCount) * (item.existTotal + item.addTotal) / (item.existCount + item.addCount))}
                                    </dd>
                                </dl>
                                {/*<dl>*/}
                                {/*    <dt>평균 단가</dt>*/}
                                {/*    <dd>*/}
                                {/*        {numberComma((parseNumber(item.existTotal) + parseNumber(item.addTotal)) / (parseNumber(item.existCount) + parseNumber(item.addCount)))}*/}
                                {/*    </dd>*/}
                                {/*</dl>*/}
                                {/*<dl>*/}
                                {/*    <dt>총 가격</dt>*/}
                                {/*    <dd>*/}
                                {/*        {*/}
                                {/*            numberComma((parseNumber(item.existCount) + parseNumber(item.addCount)) * (parseNumber(item.existTotal) + parseNumber(item.addTotal)) /*/}
                                {/*                (parseNumber(item.existCount) + parseNumber(item.addCount))*/}
                                {/*            )*/}
                                {/*        }*/}
                                {/*    </dd>*/}
                                {/*</dl>*/}
                            </div>
                            <div className="gray-box primary">
                                <dl className="">
                                    <dt>손익</dt>
                                    <dd>
                                        <span className="percent">(-0.55%)</span>
                                        <strong className="price">- 50,280</strong>
                                    </dd>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default StockCalcList;