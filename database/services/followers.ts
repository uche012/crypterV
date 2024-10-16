import { db } from "database";
import { followers } from "database/schema";
import { Followers } from "database/type";

export const GetFollowers = async (): Promise<Followers[]> => {
  const data = await db.select().from(followers);
  return data;
};
