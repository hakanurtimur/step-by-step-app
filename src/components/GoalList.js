import { Link } from 'react-router-dom'


function GoalList({ goals }) {

    console.log(goals)
  return (
    
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <h1><Link to={goal.id} >{goal.title}</Link></h1>
          <p>'Goal Start Date: {goal.startDate}</p> 
          <p>Goal End Date:  {goal.endDate}</p>
          <p>{goal.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
