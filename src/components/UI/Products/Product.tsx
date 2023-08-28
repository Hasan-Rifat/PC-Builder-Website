import { IProducts } from "@/interface/Products.interface";
import Image from "next/image";
import Link from "next/link";

type ProductsProps = {
  product: IProducts;
};

const Product: React.FC<ProductsProps> = ({ product }) => {
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
  } = product;
  return (
    <>
      <div className="mt-11  transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          className=" w-full object-cover object-center"
          src={image}
          width={200}
          height={150}
          layout="responsive"
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {productName}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {description.slice(0, 80)}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              ${price}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              {status}
            </p>
          </div>
          <button className="btn btn-active mt-5">
            <Link href={`/product-details/${_id}`}>view details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
