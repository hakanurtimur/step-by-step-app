import classes from "./GoalForm.module.css";
import { Form, useNavigate, useNavigation, redirect, json } from "react-router-dom";

const GoalForm = ({ goal, method }) => {

    const navigate = useNavigate();

    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const cancelHandler = () => {

        navigate('..')
    }




  return (<Form method={method} className={classes.form}>
    <div>
        <label htmlFor="title">Title</label>
        <input type='text' id='text' name='title' required defaultValue={goal ? goal.title : ''}></input>
    </div>
    <div>
        <label htmlFor="startDate">This Goal Start At</label>
        <input type='date' id='startDate' name='startDate' required defaultValue={goal ? goal.startDate : ''}></input>
    </div>
    <div>
        <label htmlFor="endDate">This Goal End At</label>
        <input type='date' id='endDate' name='endDate' required defaultValue={goal ? goal.endDate : ''} ></input>
    </div>
    <div>
        <label htmlFor="description">Goal Details</label>
        <textarea id='description' name='description' required defaultValue={goal ? goal.description : ''}></textarea>
    </div>
    <div className={classes.actions}>
        <button disabled={isSubmitting} >Save</button>
        <button onClick={cancelHandler} type='button'>Cancel</button>
    </div>
  </Form>);
};

export default GoalForm;


export const action = async ({ request, params }) => {
    const data = await request.formData();

    const method = await request.method

    const id = params.goalId
  
    const goal = {
      id: new Date().getTime().toString(),
      title: data.get("title"),
      startDate: data.get("startDate"),
      endDate: data.get("endDate"),
      description: data.get("description"),
    };


    if(method === 'POST') {
  
    const response = await fetch(
      "https://react-http-3a15e-default-rtdb.firebaseio.com/goals.json",
      {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(goal),
      }
    );

    if(!response.ok) {
        throw json({message: 'New goal could not sended!'}, {status: 500})

    }
    
    }

    if(method === 'PATCH') {

        const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals/' + id + '.json', {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal)
        })

        if(!response.ok) {
            throw json({message: 'New goal could not sended!'}, {status: 500})
    
        }

        
    }
  
    return redirect('/goals');
     
    
  };
  