import {
  CategoriesModel,
  ICategories,
} from "@/interface/categoriesModel.interface";
import mongoose, { model, models } from "mongoose";

// Define the schema
const categorySchema = new mongoose.Schema<ICategories, CategoriesModel>({
  name: String,
});

export default mongoose.models.Categories ||
  mongoose.model("Categories", categorySchema);
