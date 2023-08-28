import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";

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
    const res = await fetch(`http://localhost:3000/api/categories`);
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data: data } };
  } catch (error) {
    return { props: { data: [] } };
  }
}

export default PcBuilder;
