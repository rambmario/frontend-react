import { useContext } from "react";
import { maincontextState } from "@/context/maincontextprovider";
import { appFirebase, db } from "@/firebase/InitConfig"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs } from "firebase/firestore";
import SocialLogin from "./SocialLogin";
import LANGUAGES from "@/data/language";
import { validateForm } from "@/Utils/forms";

export default function Login() {

    let context = useContext(maincontextState);
    let lan = context.language;
    const CURRENT_LANGUAGE = LANGUAGES[lan];

    function submitFunction(event) {
        console.log("Estoy invocando la funcion submit...")
        event.preventDefault();
        // Revisar que el target event es el correcto o no...
        // validateForm(event);
        // fetch a backend...
        // O envio de data a firebase..
        const auth = getAuth(appFirebase);
        const email = "test@test.com";
        const password = "test1234";
        signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => {
                const user = credentials.user;
              
                console.log(user);
                const myCollection = collection(db, "lista de peliculas")
                getDocs(myCollection).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                    });
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            })
    }

    return (
        <>
            <form onSubmit={(event) => submitFunction(event)} method="POST">
                <div>
                    <label>{CURRENT_LANGUAGE.USEREMAIL}</label>
                    <input
                        type="text"
                        name="email"
                        onChange={() => console.log("callback llamado..")}
                    />
                </div>
                <div>
                    <lable>{CURRENT_LANGUAGE.PASSWORD}</lable>
                    <input
                        type="password"
                        name="password"
                        onChange={() => console.log("callback durante el ingreso..")}
                    />
                </div>
                <div>
                    <button type="submit">
                        {CURRENT_LANGUAGE.SUBMIT}
                    </button>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </>
    )
}