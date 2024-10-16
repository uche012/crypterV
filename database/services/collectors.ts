import { db } from "database";
import { collectors } from "database/schema";
import { Collectors } from "database/type";

export const GetCollectors = async (): Promise<Collectors[]> => {
  const data = await db.select().from(collectors);
  return data;
};
