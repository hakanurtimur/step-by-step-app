import {  Link, useSubmit } from 'react-router-dom'
function GoalItem( {goals} ) {
    const submit = useSubmit()
    


    const submitDeleteHandler = () => {

        const proceed = window.confirm('Are you sure for delete this goal?')
        if(proceed) {

            submit(null, {method: 'DELETE'})
        }
    }

    return <>
        <h1>{goals.title}</h1>
        <h3>Goal Start At: {goals.startDate}</h3>
        <h3>Goal End At: {goals.endDate}</h3>

        <menu>
            <Link to='edit'>Edit</Link>
            <Link to='..' relative='path'>Cancel</Link>
            <button onClick={submitDeleteHandler}>Delete</button>
        </menu>
        
    </>
}


export default GoalItem;


