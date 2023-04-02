import { Outlet } from "react-router-dom";
import GoalNavigation from "../components/GoalNavigation";

function GoalLayout() {
  return (
    <>
      <GoalNavigation /> 
      <Outlet></Outlet>
    </>
  );
}

export default GoalLayout;