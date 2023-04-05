import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Auth from "../components/Auth";
import SvgComponent from "../store/svg";
import classes from './Login.module.css'

function Login() {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const userName = useSelector((state) => state.auth.userName);

  return (
    <div  className={classes.login} style={{ margin: "15rem auto", color: "black", textAlign: "center" }}>
      {!isLoggedin && <Auth method="POST" color={"black"} />}
      {isLoggedin && (
        <>
          <h1>Hello {userName}</h1>
          <Link to='/goals'>To your goals</Link>
          <div>
            <SvgComponent></SvgComponent>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;

export async function action({ request }) {
  const data = await request.formData();
  console.log(data)

  // send to backend newsletter server ...

  return { message: "Signup successful!" };
}
