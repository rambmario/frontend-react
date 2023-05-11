import React from "react";

const defaultState = {
    language : "es",
    darkMode : true,
    username : "anonymous"
}

function getInitialState() {
    // podemos cargar data previamente guardamente en localstorage..
    return defaultState;
}

export const mainContext = React.createContext(getInitialState());