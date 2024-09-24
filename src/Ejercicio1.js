import React, { useState } from "react";


function Contador() {
    const [contador, setContador] = useState(0)

    const handleClick1 = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={handleClick1}>Aumentar</button>
        </div>
    )
}
export { Contador };


