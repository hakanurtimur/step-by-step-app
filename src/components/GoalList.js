
import { Link } from "react-router-dom";
import CompleteButton from "./CompleteButton";
import classes from "./GoalList.module.css";

function GoalList({ goals, isCompleted }) {
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
              {!isCompleted && <CompleteButton id = {goal.id} goal = {goal}/>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GoalList;
