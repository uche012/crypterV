import { db } from "database";
import { collectionsCreators } from "database/schema";
import { CollectionsCreators } from "database/type";

export const GetCollectionsCreators = async (): Promise<
  CollectionsCreators[]
> => {
  const data = await db.select().from(collectionsCreators);
  return data;
};
