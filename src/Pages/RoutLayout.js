import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RoutLayout() {


   return (
    <>
    <MainNavigation />
    <Outlet></Outlet>
    </>
   );
}

export default RoutLayout;