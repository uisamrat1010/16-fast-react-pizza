import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  //console.log(navigation);

  const isLoading = navigation.state === 'loading';
  //console.log(isLoading);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {isLoading ? <Loader /> : <Outlet />}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
