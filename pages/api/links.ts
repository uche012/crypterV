// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetLinks } from "database/services";
import { Links } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Links[]>
) {
  try {
    const data = await GetLinks();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
