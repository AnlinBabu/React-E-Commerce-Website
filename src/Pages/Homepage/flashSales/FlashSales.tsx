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
      targetHours="2023-11-30 16:30"
      headingTxt="Flash Sales"
      showArrows={true}
      headingshadow={false}
    />
  );
}
