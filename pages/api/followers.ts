// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetFollowers } from "database/services";
import { Followers } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Followers[]>
) {
  try {
    const data = await GetFollowers();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
