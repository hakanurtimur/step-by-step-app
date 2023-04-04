import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import GoalNavigation from "../components/GoalNavigation";

function GoalLayout() {

    const isLoggedin = useSelector((state) => state.auth.isLoggedin)
  return (
    <>
        
      {isLoggedin && <><GoalNavigation /><Outlet></Outlet></>}
      {!isLoggedin && <div style={{margin:'15rem', textAlign: 'center', backgroundColor: '#01403A', color: 'white', padding: '5rem', fontSize: '3rem'}}>Please login!</div>}
    </>
  );
}

export default GoalLayout;