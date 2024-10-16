// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetHotArtists } from "database/services";
import { HotArtist } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HotArtist[]>
) {
  try {
    const data = await GetHotArtists();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
