import  Navbar  from "../components/Navbar";
import { Outlet } from "react-router-dom"
import MobileTabBar from "../components/TabBar";
import { CartProvider } from '../context/CartContext.jsx';
import { UserProvider  } from '../context/UserContext.jsx';

function Layout() {
  
  return (
    <div className="flex-col gap-20">
      <UserProvider>
        <CartProvider>
        <Navbar/>
        <Outlet/>
        <MobileTabBar/>
        </CartProvider>
      </UserProvider>
        
    </div>
  )
}

export default Layout;