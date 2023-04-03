import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import RoutLayout from "./Pages/RoutLayout";
import Home from "./Pages/Home";
import Goals, { loader as goalsAction } from "./Pages/Goals";
import NewGoal from "./Pages/NewGoal";
import { action as manipulateGoalAction } from "./components/GoalForm";
import GoalDetail, {
  loader as goalDetailsAction,
  action as deleteGoalAction,
} from "./Pages/GoalDetail";
import EditGoal from "./Pages/EditGoal";
import GoalLayout from "./Pages/GoalLayout";
import ErrorPage from "./Pages/ErrorPage";
import Login, { action as loginAction }from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <RoutLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "goals",
        element: <GoalLayout />,
        children: [
          { index: true, element: <Goals />, loader: goalsAction },
          {
            path: ":goalId",
            id: "goal-detail",
            loader: goalDetailsAction,
            children: [
              {
                index: true,
                element: <GoalDetail />,
                action: deleteGoalAction,
              },
              {
                path: "edit",
                element: <EditGoal />,
                action: manipulateGoalAction,
              },
            ],
          },
          { path: "new", element: <NewGoal />, action: manipulateGoalAction },
        ],
      },
      {path: '/login', element: <Login />, action: loginAction}
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
