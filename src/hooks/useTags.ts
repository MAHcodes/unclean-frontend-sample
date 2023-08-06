import { useEffect, useState } from "react";
import { Api } from "../configs/axios";

interface Tag {
  [id: string]: string;
}

const useTags = (tagIds: number[]) => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    tagIds.forEach((tagId) => {
      Api.get(`/Tags/byId?id=${tagId}`).then((res) => {
        console.log(res);
        const { id, name } = res.data;
        setTags((current) => ({ ...current, [id]: name }));
      });
    });
  }, [tagIds]);

  return tags;
};

export default useTags;
