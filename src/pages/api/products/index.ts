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
    const result: IProducts[] = await Products.find();
    res.status(200).json({
      success: true,
      message: "Get all products successfully",
      data: result,
    });
  } else if (req.method === "POST") {
    const { name, price, quantity, description, category } = req.body;
    const product = await Products.create({
      name,
      price,
      quantity,
      description,
      category,
    });
    res.status(200).json({
      success: true,
      message: "Create product successfully",
      data: product,
    });
  }
  res.status(404).json({
    success: false,
    message: "Method not allowed",
    data: null,
  });
}
