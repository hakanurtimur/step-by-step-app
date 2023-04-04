import { Link } from "react-router-dom";
import classes from "./GoalList.module.css";

function GoalList({ goals }) {
  const isEmpty = goals.length === 0;
  return (
    <div className={classes.goals}>
      {isEmpty && <p>There is no goal...</p>}
      {!isEmpty && (
        <ul className={classes.list}>
          {goals.map((goal) => (
            <li className={classes.item} key={goal.id}>
              <Link to={goal.id}>
              <div className={classes.content}>
                <h1>{goal.title}</h1>
                <p>Goal Start Date: {goal.startDate}</p>
                <p>Goal End Date: {goal.endDate}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalList;
