import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAppSelector } from "../../../Redux/hooks";
import ShowPcBuilderPD from "@/components/UI/Products/ShowPcBuilderPD";

type PcBuilderProps = {
  data: {
    data: {
      _id: string;
      name: string;
    }[];
  };
};

const PcBuilder: React.FC<PcBuilderProps> & {
  getLayout(page: React.ReactNode): JSX.Element;
} = ({ data }) => {
  const {
    monitor,
    motherboard,
    other,
    powerSupplyUnit,
    processor,
    ram,
    storageDevice,
    total,
    count,
  } = useAppSelector((state) => state.pcBuilder);

  return (
    <section className="bg-[#111827]">
      <div className="max-w-screen-xl mx-auto py-20">
        {data && (
          <div className="grid grid-cols-1  gap-6 w-full">
            {data?.data?.map((item) => (
              <div
                key={item._id}
                className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex  justify-between items-center "
              >
                <div>
                  <span className="text-black"> {item.name}</span>
                  {item.name === "Monitor" && monitor.name && (
                    <div>
                      <ShowPcBuilderPD data={monitor} />
                    </div>
                  )}

                  {item.name === "Motherboard" && motherboard.name && (
                    <ShowPcBuilderPD data={motherboard} />
                  )}

                  {item.name === "Others" && other.name && (
                    <ShowPcBuilderPD data={other} />
                  )}

                  {item.name === "Power Supply Unit" &&
                    powerSupplyUnit.name && (
                      <ShowPcBuilderPD data={powerSupplyUnit} />
                    )}

                  {item.name === "Processor" && processor.name && (
                    <ShowPcBuilderPD data={processor} />
                  )}

                  {item.name === "RAM" && ram.name && (
                    <ShowPcBuilderPD data={ram} />
                  )}

                  {item.name === "Storage Device" && storageDevice.name && (
                    <ShowPcBuilderPD data={storageDevice} />
                  )}
                </div>
                <div>
                  <button className="border-indigo-700 border px-10 py-1 rounded-lg">
                    <Link href={`/pc-builder/${item.name}`}>
                      <h2 className=" text-gray-800 text-sm font-semibold line-clamp-1 text-left">
                        choose
                      </h2>
                    </Link>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex gap-5 items-center ">
              <div className="leading-0  ">
                <span className="text-gray-800 px-6 rounded-2xl bg-success text-xl py-1">
                  total price : ${total}
                </span>
              </div>
              <div className="">
                <button
                  disabled={count < 7}
                  className={`btn bg-white text-gray-800`}
                >
                  Complete Build
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

PcBuilder.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    /* if (typeof window === "undefined") {
      return { props: { data: [] } };
    } */
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categories`);
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data: data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}

export default PcBuilder;
