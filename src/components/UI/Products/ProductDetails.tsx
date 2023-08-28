import { IProducts } from "@/interface/Products.interface";
import Image from "next/image";
import React from "react";

type ProductDetailsProps = {
  data: IProducts;
  id: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const {
    _id,
    averageRating,
    category,
    description,
    image,
    price,
    productName,
    status,
    individualRating,
    keyFeatures,
    reviews,
  } = data;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="py-24">
        <div className="flex flex-wrap">
          <Image
            width={500}
            height={500}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-white tracking-widest  my-2">
              <span className="font-medium badge badge-accent">
                catagories :
              </span>{" "}
              <span className=" ml-3">{category}</span>
            </h2>
            <div className="text-white flex gap-5 items-center my-2">
              <span className="font-medium badge badge-primary">status : </span>
              <span className="text-lg ">{status}</span>
            </div>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {productName}
            </h1>
            <div className="flex my-4">
              <span className="flex items-center">
                {[...Array(averageRating)].map((star, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-white ml-3">{averageRating} Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <div className="flex">
                  <span className="py-1 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white">
                    ${price}
                  </span>
                </div>
              </span>
            </div>
            <p className="leading-relaxed text-white">{description}</p>
            <div className="my-5 text-white">
              {keyFeatures.map((keyFeature, i) => (
                <div className="flex items-end gap-5 mb-4">
                  <div className="badge badge-primary">
                    {keyFeature.keyName}
                  </div>
                  <div>{keyFeature.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-2 mb-4 text-white">
              <div className="badge badge-primary">total reviews</div>
              <div className="badge badge-accent">{reviews}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
