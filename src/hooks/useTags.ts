import { useEffect, useState } from "react";
import { Api } from "../configs/axios";

export interface ITag {
  [id: string]: string;
}

const useTags = (tagIds?: number[]) => {
  const [tags, setTags] = useState<ITag[]>([]);

  useEffect(() => {
    if (tagIds) {
      tagIds.forEach((tagId) => {
        Api.get(`/Tags/byId?id=${tagId}`).then((res) => {
          const { id, name } = res.data;
          setTags((current) => ({ ...current, [id]: name }));
        });
      });
    } else {
      Api.get("/Tags").then((res) => {
        res.data.map(({ id, name }: ITag) => {
          setTags((current) => ({ ...current, [id]: name }));
        });
      });
    }
  }, [tagIds]);

  return tags;
};

export default useTags;
