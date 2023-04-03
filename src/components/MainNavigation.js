import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="goals">Your Goals</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <Auth method="POST" />
    </header>
  );
};

export default MainNavigation;
