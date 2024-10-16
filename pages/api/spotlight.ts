// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetSpotlight } from "database/services";
import { Spotlight } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Spotlight[]>
) {
  try {
    const data = await GetSpotlight();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
