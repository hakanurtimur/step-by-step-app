import { useSelector } from "react-redux";
import SvgComponent from "../store/svg";
import classes from './Home.module.css';
import {Link} from 'react-router-dom'

function Home() {

    const isLoggedin = useSelector((state) => state.auth.isLoggedin)
    console.log(isLoggedin)


    return <div className={classes.content}>

<p className={classes.info}>
        Plan your goals and record the steps needed to achieve them. Step by step is here to help you.
        </p>
        
        <article>
        
        {isLoggedin && <Link to='goals'> To your goals </Link>}
        {!isLoggedin && <Link to='login'>To login</Link>}
        </article>
        <SvgComponent></SvgComponent>
        
    </div>;


}

export default Home;