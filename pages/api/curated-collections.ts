// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCuratedCollections } from "database/services";
import { CuratedCollection } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CuratedCollection[]>
) {
  try {
    const data = await GetCuratedCollections();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
