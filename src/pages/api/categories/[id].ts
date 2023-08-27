import { ICategories } from "@/interface/categoriesModel.interface";
import connectDB from "@/libs/connectBD";
import Categories from "@/model/category.model";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const categoryId = req.query.id; // Assuming your query parameter is named "id"

      if (!mongoose.Types.ObjectId.isValid(categoryId as string)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid category ID" });
      }

      const result: ICategories | null = await Categories.findById(categoryId);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Category not found" });
      }

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
