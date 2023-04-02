import { useParams } from "react-router-dom";
import GoalItem from "../components/GoalItem";

function GoalDetail() {
  const params = useParams();

  return (
    <>
      
      <GoalItem></GoalItem>
      <p>Details for {params.goalId}</p>
    </>
  );
}

export default GoalDetail;
