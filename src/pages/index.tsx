import Banner from "@/components/UI/Home/Banner";
import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
