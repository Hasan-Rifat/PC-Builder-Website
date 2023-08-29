import Image from "next/image";
import React from "react";

type ShowPcBuilderPDProps = {
  data: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

const ShowPcBuilderPD: React.FC<ShowPcBuilderPDProps> = ({
  data: { id, name, price, image },
}) => {
  return (
    <div>
      {" "}
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
          <h1 className="text-black text-lg title-font font-medium mb-1">
            Name: {name}
          </h1>
          <div className="flex ">
            <span className="flex  py-2 ">
              <div className="flex gap-2 items-center ">
                <span className="text-black"> Price:</span>
                <span className="py-2 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white badge badge-primary">
                  ${price}
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowPcBuilderPD;
