import React from "react";


//Ejercicio 1
//import { Contador } from './Ejercicio1';
// function App() {
//   return (
//     <div>
//       <h1>Ejercicio 1: Contador simple</h1> <br />
//       <Contador />
//     </div>
//   );
// };

//export default App;


//Ejercicio 2

import MensajeCiclo from "./Ejercicio2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mostarComponente: true };
  }

  toggleComponente = () => {
    this.setState((prevState => ({
      mostarComponente: !prevState.mostarComponente,
    })));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleComponente}>
          {this.state.mostarComponente
            ? "Ocultar Mensaje"
            : "Mostrar Mensaje"}
        </button>
        {this.state.mostarComponente && <MensajeCiclo />}
      </div>
    )
  }
}
export default App; 