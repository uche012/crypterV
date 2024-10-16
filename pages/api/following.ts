// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetFollowing } from "database/services";
import { Following } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Following[]>
) {
  try {
    const data = await GetFollowing();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
