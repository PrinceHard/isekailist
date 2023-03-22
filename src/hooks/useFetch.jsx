import useSWR from 'swr'

const fetcher = async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

const useFetch = (url) => {
    const {data, error, isLoading} = useSWR(url, fetcher);

    return {data, error, isLoading}
}
export default useFetch