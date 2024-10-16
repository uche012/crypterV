// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetBlog } from "database/services";
import { Blog } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Blog[]>
) {
  try {
    const data = await GetBlog();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
