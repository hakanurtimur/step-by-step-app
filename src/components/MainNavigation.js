import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import Auth from "./Auth";
import { useSelector } from "react-redux";

const MainNavigation = () => {


    const isLoggedin = useSelector((state) => state.auth.isLoggedin)
  return (
    <header className={classes.header}>
      <h1>
        Step <strong>By</strong> Step
      </h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="">
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="goals">
              <h3>Your Goals</h3>
            </NavLink>
          </li>
          {!isLoggedin &&  <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="login">
              <h3>Login</h3>
            </NavLink>
          </li>}
        </ul>
      </nav>
      <div className={classes.actions}>
      <Auth method="POST" color='white'/>
      </div>
    </header>
  );
};

export default MainNavigation;
