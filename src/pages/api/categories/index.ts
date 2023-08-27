import { CategoriesModel } from "@/interface/categoriesModel.interface";
import connectDB from "@/libs/connectBD";
import Categories from "@/model/category.model";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  if (req.method === "GET") {
    const result: CategoriesModel[] = await Categories.find();
    res.status(200).json({
      success: true,
      message: "Get all categories successfully",
      data: result,
    });
  }
  res.status(404).json({
    success: false,
    message: "Method not allowed",
    data: null,
  });
}
