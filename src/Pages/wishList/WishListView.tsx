import Product from "../../Widgets/Product";
import Loading from "../../Widgets/Loading";
import { useGetFlashSalesQuery } from "../../services/homepage";
import { Product as ProductType } from "../../services/types";
import Error from "../../Widgets/Error";

export default function WishListView() {
  const {
    data: wishlistdata,
    error: wishlisterror,
    isLoading: wishlistloading,
  } = useGetFlashSalesQuery("");

  console.log(wishlistdata);
  if (wishlisterror) return <Error errorTxt={wishlisterror} />;
  if (wishlistloading) return <Loading />;
  if (wishlistdata?.content) {
    const wishlistproducts = wishlistdata?.content as ProductType[];

    return (
      <div className="flex flex-wrap mt-16 gap-8 mx-auto">
        {wishlistproducts?.map((_item, index) => {
          return (
            <Product
              url={wishlistproducts[index].icon}
              productName={wishlistproducts[index].productName}
              price={wishlistproducts[index].price}
              rating={wishlistproducts[index].rating}
              rateCount={wishlistproducts[index].rateCount}
              viewType={"quick"}
            />
          );
        })}
      </div>
    );
  }
}
