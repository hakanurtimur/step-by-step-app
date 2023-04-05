import { createSlice } from "@reduxjs/toolkit";


const goalsSlice = createSlice({
    name: 'goals',
    initialState: {completedGoals: []},
    reducers: {
        completeGoal(state, action) {
            state.completedGoals.push({
                title: action.payload.title,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
                description: action.payload.description
            })

        }
    }
})

export const goalsActions = goalsSlice.actions;
export default goalsSlice;