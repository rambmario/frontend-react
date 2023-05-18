import { createContext } from "react";
import { useState } from "react";
import getInitialState from "./maincontext";

const maincontextState = createContext([{}, () =>{} ]);

export default function MainContextProvider ( { children }) {

    const [ context, setContext ] = useState(getInitialState());

    const setDarkMode = (darkMode) => {
        setContext({...context, ['darkMode']: darkMode })
    }

    return (
        <>
            <maincontextState.Provider value={{ darkMode: context.darkMode, setDarkmode: setDarkMode } }>
                { children }
            </maincontextState.Provider>
        </>
    );
}

export { maincontextState };