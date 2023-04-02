import { Link } from "react-router-dom";
import classes from './GoalNavigation.module.css'

function GoalNavigation() {
  return (
    <header className={classes.header}>
    <nav>
    <ul className={classes.list}>
      <li>
        <Link to="">Goals</Link>
      </li>
      <li>
        <Link to="new">New Goal</Link>
      </li>
    </ul>
    </nav>
    </header>
  );
}

export default GoalNavigation;