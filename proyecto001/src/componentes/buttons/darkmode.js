import { Component, useContext } from "react";
import { maincontextState } from '@/context/maincontextprovider'

// Lo pasamos a funcional al tener contexto...
export default class Darkmode extends Component {
    constructor ( props ) {
        super(props);
        this.state = { isToggleOn: false}
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