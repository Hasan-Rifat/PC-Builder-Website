import { IProducts } from "@/interface/Products.interface";
import connectDB from "@/libs/connectBD";
import Products from "@/model/Products.model";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  if (req.method === "GET") {
    try {
      const productId = req.query.id; // Assuming your query parameter is named "id"

      if (!mongoose.Types.ObjectId.isValid(productId as string)) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid product ID" });
      }

      const result: IProducts | null = await Products.findById(productId);

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
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
