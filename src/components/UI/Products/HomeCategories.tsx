import Link from "next/link";

type HomeCategoriesProps = {};

const HomeCategories: React.FC<HomeCategoriesProps> = () => {
  const data = [
    {
      id: 1,
      text: "Processor",
    },
    {
      id: 2,
      text: "Motherboard",
    },
    {
      id: 3,
      text: "RAM",
    },
    {
      id: 4,
      text: "Power Supply Unit",
    },
    {
      id: 5,
      text: "Storage Device",
    },
    {
      id: 6,
      text: "Monitor",
    },
    {
      id: 7,
      text: "Others",
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center"
            >
              <button>
                <Link href={`/categories/${item.text}`}>
                  <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
                    {item.text}
                  </h2>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HomeCategories;
