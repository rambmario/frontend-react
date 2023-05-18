import Login from "./login";
import Logout from "./logout";
import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";

export default function InitialLogin() {

    let context = useContext(maincontextState);
    let isLoggedIn = true;//context.isLoggedIn;

    if (isLoggedIn){
        return <Logout/>
    } else {
        return <Login/>
    }

    //return isLoggedIn? <Logout/>:<Login/>;
}