import ProductView from "../../../Widgets/ProductView";
import { useGetFlashSalesQuery } from "../../../services/homepage";
import Error from "../../../Widgets/Error";
import Loading from "../../../Widgets/Loading";
import { Product } from "../../../services/types";

export default function FlashSales() {
  const { data, error, isLoading } = useGetFlashSalesQuery("");

  if (error) return <Error errorTxt={error} />;
  if (isLoading) return <Loading />;
  return (
    <ProductView
      products={data?.content as Product[]}
      targetHours={data?.time}
      headingTxt="Flash Sales"
      showArrows={true}
      headingshadow={false}
      subheadingTxt={"Today's"}
      bottombuttonTxt={"View All Products"}
      numRows={1}
    />
  );
}
