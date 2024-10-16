import { db } from "database";
import { helpDetail } from "database/schema";
import { HelpDetail } from "database/type";

export const GetHelpDetail = async (): Promise<HelpDetail[]> => {
  const data = await db.select().from(helpDetail);
  return data;
};
