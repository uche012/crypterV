// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetActivities } from "database/services";
import { Activities } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activities[]>
) {
  try {
    const data = await GetActivities();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
