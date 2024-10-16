import { db } from "database";
import { curatedCollections } from "database/schema";
import { CuratedCollection } from "database/type";

export const GetCuratedCollections = async (): Promise<CuratedCollection[]> => {
  const data = await db.select().from(curatedCollections);
  return data;
};
