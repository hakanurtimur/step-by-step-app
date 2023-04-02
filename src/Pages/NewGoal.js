import { redirect } from "react-router-dom";
import GoalForm from "../components/GoalForm";

function NewGoal() {
  return (
    <>
      <GoalForm></GoalForm>
    </>
  );
}

export default NewGoal;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const goal = {
    id: new Date().getTime().toString(),
    title: data.get("title"),
    startDate: data.get("startDate"),
    endDate: data.get("endDate"),
    description: data.get("description"),
  };

  await fetch(
    "https://react-http-3a15e-default-rtdb.firebaseio.com/goals.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    }
  );

  return redirect('/goals');
  
  
};
