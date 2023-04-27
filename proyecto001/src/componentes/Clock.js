// Esto un componente funcional...
/*export default function Clock ( props ) {
    return (
        <>
            <span>
                Esto es un reloj que da la hora:
                <b> { props.date.toLocaleTimeString() }</b>
            </span>
        </>
    )
}*/

import { Component } from "react";
import language from "@/data/language"

// Un componente de Clase
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // this.state.date
        const welcomeString = language["en"].LOGIN;
    }

    // Es un nuevo metodo para actualizar el estado del reloj...
    tick(){
        this.setState( { date: new Date() } );
    }

    // Es invocado cuando el componente ya se pinto por primera vez y esta listo en el VDOM
    componentDidMount() {
        this.timerOne = setInterval( ()=> this.tick()  , 1000 );
    }

    render() {
        return (
            <>
                <span>
                    Esto es un reloj que da la hora:
                    <b> { this.state.date.toLocaleTimeString() } </b>
                </span>
            </>
        )
    }
}