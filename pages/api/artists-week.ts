// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetArtistsWeek } from "database/services";
import { ArtistsWeek } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArtistsWeek[]>
) {
  try {
    const data = await GetArtistsWeek();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
