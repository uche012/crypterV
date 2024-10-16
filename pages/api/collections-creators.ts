// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetCollectionsCreators } from "database/services";
import { CollectionsCreators } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CollectionsCreators[]>
) {
  try {
    const data = await GetCollectionsCreators();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
