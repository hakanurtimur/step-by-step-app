function GoalList({ goals }) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <h1>{goal.title}</h1>
          <p>Goal Start Date: {goal.startDate}</p> 
          <p>Goal End Date:  {goal.endDate}</p>
          <p>{goal.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
