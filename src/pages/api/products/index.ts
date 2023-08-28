import Products from "@/model/Products.model";

import { IProducts } from "@/interface/Products.interface";
import connectDB from "@/libs/connectBD";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  if (req.method === "GET") {
    const { category } = req.query; // Assuming your query parameter is named "id"

    let query = {};

    if (category) {
      query = {
        category: { $regex: category, $options: "i" },
      };
    }

    const result: IProducts[] = await Products.find(query);
    res.status(200).json({
      success: true,
      message: "Get all products successfully",
      data: result,
    });
  }
  res.status(404).json({
    success: false,
    message: "Method not allowed",
    data: null,
  });
}
