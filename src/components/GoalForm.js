import classes from "./GoalForm.module.css";
import { Form } from "react-router-dom";

const GoalForm = () => {



  return (<Form method="POST" className={classes.form}>
    <div>
        <label htmlFor="title">Title</label>
        <input type='text' id='text' name='title' required defaultValue='Title'></input>
    </div>
    <div>
        <label htmlFor="startDate">This Goal Start At</label>
        <input type='date' id='startDate' name='startDate' required></input>
    </div>
    <div>
        <label htmlFor="endDate">This Goal End At</label>
        <input type='date' id='endDate' name='endDate' required ></input>
    </div>
    <div>
        <label htmlFor="description">Goal Details</label>
        <textarea id='description' name='description' required defaultValue='Description'></textarea>
    </div>
    <div className={classes.actions}>
        <button>Save</button>
        <button>Cancel</button>
    </div>
  </Form>);
};

export default GoalForm;
