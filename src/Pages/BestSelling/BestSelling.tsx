import ProductView from "../../Widgets/ProductView";
import { useGetBestSellingQuery } from "../../services/homepage";
import { Product } from "../../services/types";
import Error from "../../Widgets/Error";
import Loading from "../../Widgets/Loading";

export default function BestSelling() {
  const { data, error, isLoading } = useGetBestSellingQuery("");
  if (error) return <Error errorTxt={error} />;
  if (isLoading) return <Loading />;
  return (
    <ProductView
      products={data?.content as Product[]}
      headingTxt={"Best Selling Products"}
      showArrows={false}
      headingbuttonTxt={"View All"}
      subheadingTxt={"This Month"}
    />
  );
}
