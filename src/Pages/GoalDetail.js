import {  useRouteLoaderData, json, redirect } from "react-router-dom";
import GoalItem from "../components/GoalItem";

function GoalDetail() {
  
  const goals = useRouteLoaderData('goal-detail')
  

  return (
    <>
      
      <GoalItem goals={goals}></GoalItem>
      
    </>
  );
}

export default GoalDetail;


export const loader = async({params, request}) => {
    const id = params.goalId;
    

    const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals/' + id + '.json')

    if(!response.ok) {

        throw json({message: 'Goal detail could not loaded'}, {status: 500})
    }

    return response;

}

export const action = async({request, params}) => {

    const id = params.goalId;


    const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals/' + id + '.json', {
        method: 'DELETE'
    })

    if(!response.ok) {

        throw json({message: 'Goal could not deleted'}, {status: 500})
    }

    
    return redirect('/goals')

}
