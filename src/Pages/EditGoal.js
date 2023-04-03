import { useRouteLoaderData } from "react-router-dom";
import GoalForm from "../components/GoalForm";


function EditGoal() {

    const goal = useRouteLoaderData('goal-detail')


    return <GoalForm goal={goal} method='PATCH'></GoalForm>
}

export default EditGoal;