import SelectProduct from "@/components/UI/Products/SelectProduct";
import MainLayout from "@/components/layouts/MainLayout";
import { IProducts } from "@/interface/Products.interface";

type PcBuilderItemsProps = {
  data: {
    data: IProducts[];
  };
  slug: string;
};

const PcBuilderItems: React.FC<PcBuilderItemsProps> & {
  getLayout(page: React.ReactNode): JSX.Element;
} = ({ data, slug }) => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-5 mt-10  pb-20">
          {data?.data?.map((product) => (
            <SelectProduct slug={slug} key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

PcBuilderItems.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context: {
  params: { slug: string };
}) {
  /*   if (typeof window === "undefined") {
    return { props: { data: [] } };
  } */
  // Fetch data from external API
  try {
    const { slug } = context.params;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/products?category=${slug}`
    );
    const data = await res.json();
    // Pass data to the page via props
    return { props: { data: data, slug } };
  } catch (error) {
    return { props: { data: [], slug: "" } };
  }
}

export default PcBuilderItems;
