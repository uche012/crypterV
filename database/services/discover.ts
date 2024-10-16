import { db } from "database";
import { discover } from "database/schema";
import { Discover } from "database/type";

export const GetDiscover = async (): Promise<Discover[]> => {
  const data = await db.select().from(discover);
  return data;
};
