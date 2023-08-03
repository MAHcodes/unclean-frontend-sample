import useSWR from "swr";
import { Api } from "../configs/axios";

const fetcher = (url: string) => Api.get(url).then((res) => res.data);

const usePosts = () => {
  const { data, error, isLoading } = useSWR("/Posts", fetcher);

  return {
    posts: data,
    isLoading,
    isError: error,
  };
};

export default usePosts;
