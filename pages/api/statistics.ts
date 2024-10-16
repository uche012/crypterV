// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetStatistics } from "database/services";
import { Statistics } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Statistics[]>
) {
  try {
    const data = await GetStatistics();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
