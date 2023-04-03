import { json, useLoaderData } from "react-router-dom";
import GoalList from "../components/GoalList";


function Goals() {

    const goals = useLoaderData()

    




    return <>
        <GoalList goals={goals} ></GoalList>
    </>
}

export default Goals;


export const loader = async() => {
    const response = await fetch('https://react-http-3a15e-default-rtdb.firebaseio.com/goals.json')

    if(!response.ok) {

        throw json({message: 'Goals could not loaded'}, {status: 500})
    }

    const data = await response.json();

    let loadedGoals = [];

    for(const key in data) {

        loadedGoals.push({
            id: key,
            title: data[key].title,
            endDate: data[key].endDate,
            startDate: data[key].startDate,
            description: data[key].description,
        })
    }
    
    
    
    return loadedGoals;
    

}