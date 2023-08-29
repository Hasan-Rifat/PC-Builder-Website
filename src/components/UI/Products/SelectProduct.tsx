import { IProducts } from "@/interface/Products.interface";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "../../../../Redux/hooks";
import {
  setCount,
  setMonitor,
  setMotherboard,
  setOther,
  setPowerSupplyUnit,
  setProcessor,
  setRam,
  setStorageDevice,
  setTotal,
} from "../../../../Redux/features/pcBuilder/pcBuilderSlice";
import { useRouter } from "next/router";

type SelectProductProps = {
  product: IProducts;
  slug: string;
};

const SelectProduct: React.FC<SelectProductProps> = ({ product, slug }) => {
  const router = useRouter();
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

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: IProducts, slug: string) => {
    const id = product._id;
    const name = product.productName;
    const price = product.price;
    const image = product.image;

    switch (slug) {
      case "Processor":
        dispatch(setProcessor({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());

        break;
      case "Motherboard":
        dispatch(setMotherboard({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      case "RAM":
        dispatch(setRam({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      case "Power Supply Unit":
        dispatch(setPowerSupplyUnit({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      case "Storage Device":
        dispatch(setStorageDevice({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      case "Monitor":
        dispatch(setMonitor({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      case "Others":
        dispatch(setOther({ id, name, price, image }));
        dispatch(setTotal(price));
        dispatch(setCount());
        break;
      default:
        break;
    }
    router.push("/pc-builder");
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden  shadow-[0px_4px_80px_rgba(0,0,0,0.4)] rounded-xl">
      <div className="">
        <div className="flex flex-wrap gap-5 items-center justify-around flex-col md:flex-row">
          <div className="max-w-[200px] h-[200px]">
            <Image
              alt="ecommerce"
              className="p-5"
              src={image}
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
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
            <h1 className="text-white text-lg title-font font-medium mb-1">
              {productName}
            </h1>
            <div className="flex ">
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
                  <span className="py-2 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white badge badge-primary">
                    ${price}
                  </span>
                </div>
              </span>
            </div>
            {/* <p className="leading-relaxed text-white">{description}</p> */}
            <div className="mb-2 text-white">
              {keyFeatures.map((keyFeature, i) => (
                <div className="flex items-end gap-5 ">
                  <div className="badge badge-primary">
                    {keyFeature.keyName}
                  </div>
                  <div>{keyFeature.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-2  text-white">
              <div className="badge badge-primary">total reviews</div>
              <div className="badge badge-accent">{reviews}</div>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(product, slug)}
              className="bg-indigo-700 text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectProduct;
