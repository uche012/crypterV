// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetActivityCollections } from "database/services";
import { ActivityCollections } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActivityCollections[]>
) {
  try {
    const data = await GetActivityCollections();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
