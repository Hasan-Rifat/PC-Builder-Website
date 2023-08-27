import { IProducts, ProductsModel } from "@/interface/Products.interface";
import mongoose, { model, models } from "mongoose";

// Define the schema
const productSchema = new mongoose.Schema<IProducts, ProductsModel>({
  id: Number,
  image: String,
  productName: String,
  category: String,
  status: String,
  price: Number,
  description: String,
  keyFeatures: [
    {
      keyName: String,
      value: String,
    },
  ],
  individualRating: Number,
  averageRating: Number,
  reviews: Number,
});

export default mongoose.models.Products ||
  mongoose.model("Products", productSchema);
