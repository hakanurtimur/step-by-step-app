import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import RoutLayout from "./Pages/RoutLayout";
import Home from "./Pages/Home";
import Goals, { loader as goalsAction } from "./Pages/Goals";
import NewGoal, { action as addGoalAction } from "./Pages/NewGoal";
import GoalDetail, {loader as goalDetailsAction} from "./Pages/GoalDetail";
import EditGoal from "./Pages/EditGoal";
import GoalLayout from "./Pages/GoalLayout";
import ErrorPage from "./Pages/ErrorPage";

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
          { index: true, element: <Goals />, loader: goalsAction},
          { path: ":goalId", element: <GoalDetail />, loader: goalDetailsAction },
          { path: "new", element: <NewGoal />, action: addGoalAction },
          { path: ":goalId/edit", element: <EditGoal /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
