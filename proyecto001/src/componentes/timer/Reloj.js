import { Component } from "react";

export default class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, minutes: 0 };
  }

 
  componentDidMount() {
    this.countTime = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds == 59) {
        this.setState({ seconds: 0, minutes: this.state.minutes + 1 }); //agrega de a un minuto al cumplirse 59 segundos
      } else {
        this.setState({ seconds: this.state.seconds + 1 }); //suma de a un segundo
      }
    }, 1000);
  }

  render() {
    return (
      <>
     
        <main
        style={{
          border: "3px solid gray",
          padding: "1rem",
          borderRadius: "20px",
          backgroundColor: "lightblue",
         
        }}
      >
        {" "}
        <div><h1>
          <strong> {/* agrega un cero cuando el num es menor que 10*/}
            {this.state.minutes > 9
              ? this.state.minutes
              : `0${this.state.minutes}`}
        :
            {this.state.seconds > 9
              ? this.state.seconds
              : `0${this.state.seconds}`}
          </strong>  </h1>       
        </div>
      </main>{" "}


      </>
    );
  }
}
