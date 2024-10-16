// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetNfts } from "database/services";
import { Nfts } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Nfts[]>
) {
  try {
    const data = await GetNfts();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
