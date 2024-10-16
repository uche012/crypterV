import { db } from "database";
import { help } from "database/schema";
import { Help } from "database/type";

export const GetHelp = async (): Promise<Help[]> => {
  const data = await db.select().from(help);
  return data;
};
