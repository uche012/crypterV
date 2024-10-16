// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetProvenance } from "database/services";
import { Provenance } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provenance[]>
) {
  try {
    const data = await GetProvenance();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
