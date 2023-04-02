
function GoalItem( {goals} ) {


    return <>
        <h1>{goals.title}</h1>
        <h3>Goal Start At: {goals.startDate}</h3>
        <h3>Goal End At: {goals.endDate}</h3>
        
    </>
}


export default GoalItem;