import { useDispatch, useSelector } from "react-redux";
import { useFetcher } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

function Auth({ method, color }) {
  const usersName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);

  const fetcher = useFetcher();

  const { data, formData, state } = fetcher;

  if (formData && state === "submitting") {
    dispatch(authActions.changeUserName(formData.get("userName")));
  }

  console.log(usersName);

  const logInHandler = () => {
    if (data) {
      dispatch(authActions.logIn());
    }
  };

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };

  return (
    <>
      <fetcher.Form
        className={classes.form}
        action="/login"
        method={method}
        style={{ display: `${!isLoggedin ? "inline" : "none"}`, color: color }}
      >
        <span>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" required />
        </span>
        <span>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </span>
        <span className={classes.acitons}>
          <button onClick={logInHandler}>Login</button>
        </span>
      </fetcher.Form>

      <div
        className={classes.logout}
        style={{ display: `${!isLoggedin ? "none" : "flex"}`, gap: '1rem', color: 'white' }}
      >
 
          <h1>{usersName}</h1>
          <button onClick={logOutHandler}>Logout</button>
        
      </div>
    </>
  );
}

export default Auth;
