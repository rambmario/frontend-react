import { Component } from "react";
import { useState } from "react";

export default function ButtonPlusF ( props ) {
   
    let [contador, setContador] = useState( 0);
    

    function increment () {
        
        setContador( contador + 1);
    }

    function decrement() {
        let counter = contador - 1
        if ( counter <= 0 ) {
            counter = 0
        }
        setContador(counter );
    }

   
    return (
            <>
                <button onClick={ () => increment() }>
                    ++
                </button>
                <button onClick={ () => decrement() }>
                    --
                </button>
                <br></br>
                <span> El contador es: {contador} </span>
            </>
    )
    
}