import { db } from "database";
import { creators } from "database/schema";
import { Creators } from "database/type";

export const GetCreators = async (): Promise<Creators[]> => {
  const data = await db.select().from(creators);
  return data;
};
