import Banner from "@/components/UI/Home/Banner";
import HomeCategories from "@/components/UI/Products/HomeCategories";
import HomeProduct from "@/components/UI/Products/HomeProduct";
import Product from "@/components/UI/Products/Product";
import Products from "@/components/UI/Products/Product";
import MainLayout from "@/components/layouts/MainLayout";
import { IProducts } from "@/interface/Products.interface";
// Make sure to import React

type HomeProps = {
  data: {
    data: IProducts[];
  };
};

const Home: React.FC<HomeProps> & {
  getLayout(page: React.ReactNode): JSX.Element;
} = ({ data }) => {
  return (
    <>
      <Banner />
      <HomeCategories />
      <HomeProduct data={data?.data} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home; // Don't forget to export the component
