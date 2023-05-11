import { Component, useContext } from "react";
import { mainContext } from "@/context/maincontext";

export default class Darkmode extends Component {
    constructor ( props ) {
        super(props);
        let { darkMode } = {}//useContext(mainContext)
        this.state = { isToggleOn: darkMode}
    }

    changeOnOff() {
        this.setState( { isToggleOn: !this.state.isToggleOn} )
    }

    render () {
        return (
            <>
            <button onClick={ () => this.changeOnOff()  }>
                { this.state.isToggleOn ? 'Encendido': 'Apagado'}
            </button>
            </>
        )
    }
}