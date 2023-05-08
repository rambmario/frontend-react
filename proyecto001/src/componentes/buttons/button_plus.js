import { Component } from "react";


export default class ButtonPlus extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
    }

    increment () {
        
        this.setState({ contador: this.state.contador + 1 });
    }

    decrement() {
        let counter = this.state.contador - 1
        if ( counter <= 0 ) {
            counter = 0
        }
        this.setState({ contador: counter });
    }

    render() {
        return (
            <>
                <button onClick={ () => this.increment() }>
                    ++
                </button>
                <button onClick={ () => this.decrement() }>
                    --
                </button>
                <br></br>
                <span> El contador es: {this.state.contador} </span>
            </>
        )
    }
}