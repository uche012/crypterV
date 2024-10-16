// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetBlogSlider } from "database/services";
import { BlogSlider } from "database/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogSlider[]>
) {
  try {
    const data = await GetBlogSlider();
    res.status(200).json(data);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json([]);
    return;
  }
}
