import Login from "./login";
import Logout from "./logout";
import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";

export default function InitialLogin( props ) {

    let context = useContext(maincontextState);
    let isLoggedIn = context.isLoggedIn;

    if (isLoggedIn){
        return <Logout/>
    } else {
        return <Login/>
    }

    //return isLoggedIn? <Logout/>:<Login/>;
}