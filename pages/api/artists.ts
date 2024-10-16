// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetArtists } from "database/services";
import { Artists } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artists[]>
) {
  try {
    const data = await GetArtists();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
