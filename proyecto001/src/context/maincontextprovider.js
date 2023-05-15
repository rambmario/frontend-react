import { createContext } from "react";
import getInitialState from "./maincontext";

export const maincontextState = createContext(getInitialState());

export function mainContextProvider ( { children }) {

    return (
        <>
            <maincontextState.Provider value="login">
                { children }
            </maincontextState.Provider>
        </>
    );
}