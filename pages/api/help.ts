// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetHelp } from "database/services";
import { Help } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Help[]>
) {
  try {
    const data = await GetHelp();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
