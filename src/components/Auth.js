import { useDispatch, useSelector } from "react-redux";
import { useFetcher } from "react-router-dom";
import { authActions } from "../store/auth-slice";

function Auth({ method }) {
  const usersName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);

  const fetcher = useFetcher();

  const { data } = fetcher;

  if (data) {
    const datas = fetcher.formData;
    const userName = datas.get("userName");
    console.log(userName);
  }

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
        action="/login"
        method={method}
        style={{ display: `${!isLoggedin ? "inline" : "none"}` }}
      >
        <span>
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" required />
        </span>
        <span>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </span>
        <span>
          <button onClick={logInHandler}>Login</button>
        </span>
      </fetcher.Form>

      <div style={{ display: `${!isLoggedin ? "none" : "inline"}` }}>
        <p>{usersName}</p>
        <button onClick={logOutHandler}>LogOut</button>
      </div>
    </>
  );
}

export default Auth;
