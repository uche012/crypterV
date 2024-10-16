// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetBids } from "database/services";
import { Bids } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bids[]>
) {
  try {
    const data = await GetBids();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
