import { db } from "database";
import { activityCollections } from "database/schema";
import { ActivityCollections } from "database/type";

export const GetActivityCollections = async (): Promise<
  ActivityCollections[]
> => {
  const data = await db.select().from(activityCollections);
  return data;
};
