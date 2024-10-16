import { db } from "database";
import { activities } from "database/schema";
import { Activities } from "database/type";

export const GetActivities = async (): Promise<Activities[]> => {
  const data = await db.select().from(activities);
  return data;
};
