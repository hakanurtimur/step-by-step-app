import { useSelector } from "react-redux";
import GoalList from "../components/GoalList";


function CompletedGoals() {
  const completedGoals = useSelector((state) => state.goals.completedGoals);

  


  return <GoalList goals={completedGoals} isCompleted = {true} />;
}

export default CompletedGoals;
