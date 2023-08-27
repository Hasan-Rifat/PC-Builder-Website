import { Model } from "mongoose";

interface KeyFeature {
  keyName: string;
  value: string;
}

// Interface for the product document
export type IProducts = {
  id: number;
  image: string;
  productName: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: KeyFeature[];
  individualRating: number;
  averageRating: number;
  reviews: number;
};

export type ProductsModel = Model<IProducts, Record<string, unknown>>;
