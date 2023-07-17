const defaultState = {
    language : "es",
    darkMode : true,
    isLoggedIn: false,
    username : "anonymous",
    user: {}
}

export function getInitialState() {
    
    let initialState = defaultState;

    // Conservar el localstorage de lado cliente siempre.
    //initialState = JSON.parse(localStorage.getItem("contextState"))
    
    
    return initialState;
}

export function saveContextState ( newcontextState) {
    //salva dentro de localstorage
    localStorage.setItem( "contextState", JSON.stringify(newcontextState))
}

