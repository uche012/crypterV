import { db } from "database";
import { following } from "database/schema";
import { Following } from "database/type";

export const GetFollowing = async (): Promise<Following[]> => {
  const data = await db.select().from(following);
  return data;
};
