import Product from "@/components/UI/Products/Product";
import ProductDetails from "@/components/UI/Products/ProductDetails";
import MainLayout from "@/components/layouts/MainLayout";
import { IProducts } from "@/interface/Products.interface";

type ProductDetailsPageProps = {
  data: IProducts;

  id: string;
};

const ProductDetailsPage: React.FC<ProductDetailsPageProps> & {
  getLayout(page: React.ReactNode): JSX.Element;
} = ({ data, id }) => {
  return (
    <section className="bg-[#111827]">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="">{data && <ProductDetails data={data} id={id} />}</div>
      </div>
    </section>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const data = await res.json();

  const paths = data?.data?.map((category: IProducts) => ({
    params: { id: category._id }, // Use 'id' as the parameter name
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  try {
    const { params } = context;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}` // Use 'id' as the parameter
    );
    const data = await res.json();

    return {
      props: {
        data: data?.data,
        id: params.id,
      },
    };
  } catch (error) {
    console.error("Error fetching props:", error);
    return {
      props: {
        data: [], // Provide an empty array in case of an error
        id: "",
      },
    };
  }
};

ProductDetailsPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductDetailsPage; // Export the component
