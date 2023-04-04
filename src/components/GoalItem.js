import { Link, useSubmit } from "react-router-dom";
import classes from "./GoalItem.module.css";

function GoalItem({ goals }) {
  const submit = useSubmit();

  const submitDeleteHandler = () => {
    const proceed = window.confirm("Are you sure for delete this goal?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <div className={classes.goalItem}>
      <div className={classes.content}>
        <h1>{goals.title}</h1>
        <h3>Goal Start At: {goals.startDate}</h3>
        <h3>Goal End At: {goals.endDate}</h3>
        <p>Goal details: <div>{goals.description}</div></p>
      </div>

      <menu className={classes.menu}>
        <Link to="edit">Edit</Link>
        <Link to=".." relative="path">
          Cancel
        </Link>
        <button onClick={submitDeleteHandler}>Delete</button>
      </menu>
    </div>
  );
}

export default GoalItem;
