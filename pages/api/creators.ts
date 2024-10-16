// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCreators } from "database/services";
import { Creators } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Creators[]>
) {
  try {
    const data = await GetCreators();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
