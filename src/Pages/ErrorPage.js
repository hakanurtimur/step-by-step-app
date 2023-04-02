
import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    
    
    let errorHead = 'Something went wrong!'
    let errorMessage = 'An error occured!'

    if(error.status === 500) {
        errorMessage = error.data.message
        errorHead = 'Something went wrong!'
    }

    if(error.status === 404) {
        errorMessage = 'Page is not found!'
        errorHead = 'Source not found'
        
    }


    

    return <>
    <h1>{errorHead}</h1>
    <h3>{errorMessage}</h3>
    </>
} 


export default ErrorPage;