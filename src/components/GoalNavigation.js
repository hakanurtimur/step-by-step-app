
import { NavLink } from "react-router-dom";
import classes from './GoalNavigation.module.css'

function GoalNavigation() {

    
  return (
    <header className={classes.header}>
    <nav>
    <ul className={classes.list}>
      <li>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} end to="">Goals</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} end  to="new">New Goal</NavLink>
      </li>
      <li>
        <NavLink className={({isActive}) => isActive ? classes.active : undefined} end  to="completed">Completed Goals</NavLink>
      </li>
    </ul>
    </nav>
    </header>
  );
}

export default GoalNavigation;