import { useEffect, useState } from "react";
import { Api } from "../configs/axios";

export interface IUser {
  [id: string]: string;
}

const useUsers = (userIds?: number[]) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (userIds) {
      userIds.forEach((userId) => {
        Api.get(`/Users/byId?id=${userId}`).then((res) => {
          const { id, username } = res.data;
          setUsers((current) => ({ ...current, [id]: username }));
        });
      });
    } else {
      Api.get("/Users").then((res) => {
        res.data.map(({ id, username }: IUser) => {
          setUsers((current) => ({ ...current, [id]: username }));
        });
      });
    }
  }, [userIds]);

  return users;
};

export default useUsers;
