import Product from "@/components/UI/Products/Product";
import MainLayout from "@/components/layouts/MainLayout";
import { IProducts } from "@/interface/Products.interface";
import { ICategories } from "@/interface/categoriesModel.interface";
import { useRouter } from "next/router";

type CategoriesProps = {
  data: {
    data: IProducts[];
  };
  slug: string;
};

const Categories: React.FC<CategoriesProps> & {
  getLayout(page: React.ReactNode): JSX.Element;
} = ({ data, slug }) => {
  const router = useRouter();
  return (
    <section className="bg-[#111827]">
      <h3 className="text-3xl text-center text-white py-10">{slug}</h3>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-10  pb-20">
          {data?.data?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const data = await res.json();
  const paths = data?.data?.map((product: IProducts) => ({
    params: { slug: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { slug: string } }) => {
  try {
    const { params } = context;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/products?category=${params.slug}` // Use 'id' as the parameter
    );
    const data = await res.json();

    return {
      props: {
        data: data,
        slug: params.slug,
      },
    };
  } catch (error) {
    console.error("Error fetching props:", error);
    return {
      props: {
        data: [], // Provide an empty array in case of an error
        slug: "",
      },
    };
  }
};

Categories.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Categories; // Export the component
