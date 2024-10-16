// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetDiscover } from "database/services";
import { Discover } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Discover[]>
) {
  try {
    const data = await GetDiscover();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
