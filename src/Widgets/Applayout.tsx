import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Header from "./Header/Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Promotion />
      <Header />
      <div className=" max-w-[1200px] mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
