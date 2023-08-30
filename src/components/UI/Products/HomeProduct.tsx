import { IProducts } from "@/interface/Products.interface";

import Product from "./Product";

type HomeProductProps = {
  data: IProducts[];
};

const HomeProduct: React.FC<HomeProductProps> = ({ data }) => {
  return (
    <section className="bg-[#111827]">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10 pb-20">
          {data.slice(0, 6).map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeProduct;
