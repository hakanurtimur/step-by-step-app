import { useParams, useLoaderData } from "react-router-dom";
import GoalItem from "../components/GoalItem";

function GoalDetail() {
  const params = useParams();
  const goals = useLoaderData()
  console.log(goals)

  return (
    <>
      
      <GoalItem goals={goals}></GoalItem>
      <p>Details for {params.goalId}</p>
    </>
  );
}

export default GoalDetail;


export const loader = async({params, request}) => {
    const id = params.goalId;
    console.log(id)

    const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals/' + id + '.json')

    return response;

}
