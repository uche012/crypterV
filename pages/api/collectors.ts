// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCollectors } from "database/services";
import { Collectors } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Collectors[]>
) {
  try {
    const data = await GetCollectors();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
