// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetAuctions } from "database/services";
import { Auctions } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Auctions[]>
) {
  try {
    const data = await GetAuctions();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
