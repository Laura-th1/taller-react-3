import React from 'react';


class MensajeCiclo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mensaje: "Bienvenido: Haz click en el botón." };
    }
    cambiarMensaje = () => {
        this.setState({ mensaje: "¡Que tengas buen dia!" });
    };
    componentDidUpdate() {
        console.log("El componente se actualiza.");
    };
    componentWillUnmount() {
        console.log("El componente desaparece.");
    }
    render() {
        return (
            <div>
                <p>Contador: {this.state.mensaje}</p>
                <button onClick={this.cambiarMensaje}>Cambiar Mensaje</button>
            </div>
        );
    }
}
export default MensajeCiclo; 