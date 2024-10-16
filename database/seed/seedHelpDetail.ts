import { HelpDetail } from "database/type";
import { seedTable } from "./seedTable";
import { helpDetail } from "database/schema";

const data: HelpDetail[] = [];

export const seedHelpDetail = async () => {
  await seedTable(helpDetail, data, helpDetail.id);
};
