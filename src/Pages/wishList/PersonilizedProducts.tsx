import Error from "../../Widgets/Error";
import Loading from "../../Widgets/Loading";
import { useGetFlashSalesQuery } from "../../services/homepage";
import ProductView from "../../Widgets/ProductView";
import { Product as ProductType } from "../../services/types";

export default function PersonilizedProducts() {
  const {
    data: personilizedProductsData,
    error: personilizedProductsError,
    isLoading: personilizedProductsLoading,
  } = useGetFlashSalesQuery("");
  if (personilizedProductsError)
    return <Error errorTxt={personilizedProductsError} />;
  if (personilizedProductsLoading) return <Loading />;
  return (
    <ProductView
      products={personilizedProductsData?.content as ProductType[]}
      headingTxt={"Just For You"}
      numRows={1}
      mainHeadingLeftRectangle={true}
      headingshadow={false}
    />
  );
}
