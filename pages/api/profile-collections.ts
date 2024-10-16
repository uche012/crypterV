// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetProfileCollections } from "database/services";
import { ProfileCollections } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileCollections[]>
) {
  try {
    const data = await GetProfileCollections();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
