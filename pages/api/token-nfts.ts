// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetTokenNfts } from "database/services";
import { TokenNfts } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TokenNfts[]>
) {
  try {
    const data = await GetTokenNfts();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
