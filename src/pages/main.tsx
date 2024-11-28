import Header from "components/Header";
import { useForm, SubmitHandler } from 'react-hook-form';
import {useEffect, useState} from "react";
import {numberComma} from "utils/helpers";
import StockCalcList from "components/StockCalcList";

export interface IFormInput {
    existCount: string;
    existPrice: string;
    existTotal: string;
    addCount: string;
    addPrice: string;
    addTotal: string;
    currentPrice?: string;
}

function Main() {
    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<IFormInput>();
    const [isInputData, setIsInputData] = useState(false);
    const [dataList, setDataList] = useState<IFormInput[]>([]);
    
    //수량 및 가격 계산
    const existCount = watch('existCount');
    const existPrice = watch('existPrice');
    const addCount = watch('addCount');
    const addPrice = watch('addPrice');
    const currentPrice = watch('currentPrice');
    
    useEffect(() => {
        const existTotal = (Number(existCount) || 0) * (Number(existPrice) || 0);
        if(existTotal){
            setValue('existTotal', numberComma(existTotal));
        }
        // setValue('existTotal', total.toString());
    }, [existCount, existPrice, setValue]);
    
    useEffect(() => {
        const addTotal = (Number(addCount) || 0) * (Number(addPrice) || 0);
        if(addTotal){
            setValue('addTotal', numberComma(addTotal));
        }
        // setValue('existTotal', total.toString());
    }, [addCount, addPrice, setValue]);
    
    //입력값 초기화
    const OnClickBtnDelete = (field: keyof IFormInput) => {
        setValue(field, "");
    };
    
    //제출 핸들러
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setIsInputData(true);
        setDataList(prev => [...prev, data]); //데이터를 배열에 추가
        reset(); //폼 초기화
    };
    
    return (
        <div className="wrap">
            <Header />
            
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-wrap">
                        <p className="form-tit">기존</p>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="existCount" className="label-tit">수량</label>
                                <input
                                    id="existCount"
                                    {...register('existCount', { required: '수량을 입력해주세요' })}
                                    // placeholder="0"
                                />
                                <button type="button" className="btn-del" onClick={() => OnClickBtnDelete('existCount')}></button>
                            </div>
                            {errors.existCount && <p className="msg error">{errors.existCount.message}</p>}
                        </div>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="existPrice" className="label-tit">매수 가격</label>
                                <input
                                    id="existPrice"
                                    {...register('existPrice', { required: '매수 가격을 입력해주세요' })}
                                    // placeholder="0"
                                />
                                <button type="button" className="btn-del" onClick={() => OnClickBtnDelete('existPrice')}></button>
                            </div>
                            {errors.existPrice && <p className="msg error">{errors.existPrice.message}</p>}
                        </div>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="existTotal" className="label-tit">총 가격</label>
                                <input
                                    {...register('existTotal')}
                                    readOnly
                                    // placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-wrap">
                        <p className="form-tit">추가</p>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="addCount" className="label-tit">수량</label>
                                <input
                                    {...register('addCount', { required: '수량을 입력해주세요' })}
                                    // placeholder="0"
                                />
                                <button type="button" className="btn-del" onClick={() => OnClickBtnDelete('addCount')}></button>
                            </div>
                            {errors.addCount && <p className="msg error">{errors.addCount.message}</p>}
                        </div>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="addPrice" className="label-tit">매수 가격</label>
                                <input
                                    {...register('addPrice', { required: '매수 가격을 입력해주세요' })}
                                    // placeholder="0"
                                />
                                <button type="button" className="btn-del" onClick={() => OnClickBtnDelete('addPrice')}></button>
                            </div>
                            {errors.addPrice && <p className="msg error">{errors.addPrice.message}</p>}
                        </div>
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="addTotal" className="label-tit">총 가격</label>
                                <input
                                    {...register('addTotal')}
                                    readOnly
                                    // placeholder="0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-wrap">
                        {/*<p className="form-tit">현재가</p>*/}
                        <div className="input-wrap row">
                            <div className="input">
                                <label htmlFor="addCount" className="label-tit">현재가</label>
                                <input
                                    {...register('currentPrice')}
                                    // placeholder="0"
                                />
                                <button type="button" className="btn-del" onClick={() => OnClickBtnDelete('currentPrice')}></button>
                            </div>
                        </div>
                    </div>
                    <div className="form-btn">
                        <button type="submit" className="btn">계산하기</button>
                    </div>
                </form>
    
                {isInputData && <StockCalcList list={dataList} />}
            </div>
        </div>
    )
}

export default Main;