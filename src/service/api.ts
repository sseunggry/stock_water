const BASE_PATH = '';

export const fetchData = async (name: string) => {
    const response = await fetch(`${BASE_PATH}/${name}`);
    return await response.json();
}