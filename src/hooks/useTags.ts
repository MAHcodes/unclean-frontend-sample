import { useEffect, useState } from "react";
import { Api } from "../configs/axios";

export interface ITag {
  id: string;
  name: string;
}

const useTags = (tagIds?: number[]) => {
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    if (tagIds) {
      // TODO: use promise
      tagIds.forEach((tagId) => {
        Api.get(`/Tags/byId?id=${tagId}`).then((res) => {
          const { id, name } = res.data;
          setTags((current) => ({ ...current, [id]: name }));
        });
      });
    } else {
      Api.get("/Tags").then((res) => {
        setTags(res.data.map(({ id, name }: ITag) => {
          return {id, name};
        }));
      });
    }
  }, [tagIds]);

  return tags;
};

export default useTags;
