import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";
import SocialLogin from "./SocialLogin";
import LANGUAGES from "@/data/language";
import { validateForm } from "@/Utils/forms";

export default function Login() {

    let context = useContext(maincontextState);
    let lan = context.language;
    const CURRENT_LANGUAGE = LANGUAGES[lan];

    function submitFunction ( event ) {
        console.log("Estoy invocando la funcion submit...")
        event.preventDefault();
        validateForm(event);
        // fetch a backend...
        // O envio de data a firebase..
    }

    return (
        <>
            <form onSubmit={ ( event ) => submitFunction(event) } method="POST">
                <div>
                    <label>{ CURRENT_LANGUAGE.USEREMAIL }</label>
                    <input
                        type="text"
                        name="email"
                        onChange={ () => console.log("callback llamado..")}
                    />
                </div>
                <div>
                    <lable>{ CURRENT_LANGUAGE.PASSWORD }</lable>
                    <input
                        type="password"
                        name="password"
                        onChange={ () => console.log("callback durante el ingreso..")}
                    />
                </div>
                <div>
                    <button type="submit">
                        { CURRENT_LANGUAGE.SUBMIT }
                    </button>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </>
    )
}