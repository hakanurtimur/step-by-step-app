import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { goalsActions } from "../store/goals-slice";

const CompleteButton = ({id, goal}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  


      const completeGoal = async() => {

        dispatch(goalsActions.completeGoal(goal))
    
        await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals/' + id + '.json', {
        method: 'DELETE'
        

    })

        
       
        navigate('/goals')
      }


    return <button onClick={completeGoal}>
        &#10004;
    </button>
}

export default CompleteButton;