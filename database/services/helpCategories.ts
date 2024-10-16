import { db } from "database";
import { helpCategories } from "database/schema";
import { HelpCategories } from "database/type";

export const GetHelpCategories = async (): Promise<HelpCategories[]> => {
  const data = await db.select().from(helpCategories);
  return data;
};
