import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  const isLoading = navigation.state === "loading";
  console.log(isLoading);

  return (
    <div className="layout">
      <Header />

      <main>{isLoading ? <Loader /> : <Outlet />}</main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
