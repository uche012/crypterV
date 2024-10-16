// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetHelpDetail } from "database/services";
import { HelpDetail } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelpDetail[]>
) {
  try {
    const data = await GetHelpDetail();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
