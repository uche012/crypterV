// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetHelpCategories } from "database/services";
import { HelpCategories } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelpCategories[]>
) {
  try {
    const data = await GetHelpCategories();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
