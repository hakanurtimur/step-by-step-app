
import Auth from "../components/Auth";



function Login() {


   

    

  return (
    <>
      
        <Auth method="POST" />
      
    </>
  );
}

export default Login;

export async function action({ request }) {
  const data = await request.formData();
  const userName = data.get("userName");

  
  // send to backend newsletter server ...

  return ({ message: "Signup successful!"});
}
