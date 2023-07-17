import { createContext } from "react";
import { useState } from "react";
import { getInitialState } from "./maincontext";
import { saveContextState } from "./maincontext";

const maincontextState = createContext([{}, () =>{} ]);

export default function MainContextProvider ( { children }) {

    const [ context, setContext ] = useState(getInitialState());

    const setDarkMode = (darkMode) => {
        setContext({...context, ['darkMode']: darkMode })

        saveContextState(context);
    }

    return (
        <>
            <maincontextState.Provider value={{ darkMode: context.darkMode, setDarkmode: setDarkMode, isLoggedIn: context.isLoggedIn, language: context.language } }>
                { children }
            </maincontextState.Provider>
        </>
    );
}

export { maincontextState };