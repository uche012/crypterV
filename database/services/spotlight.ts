import { db } from "database";
import { spotlight } from "database/schema";
import { Spotlight } from "database/type";

export const GetSpotlight = async (): Promise<Spotlight[]> => {
  const data = await db.select().from(spotlight);
  return data;
};
