import React, {useState} from "react";

function Contador () {
    const [contador, setContador] = useState(0);
    function suma () {
        setContador(contador + 1);
    }
    function resta () {
        setContador(contador - 1);
    }

return (
    <div>
        <h1>Counter Section</h1>
        <span>Contador: {contador}</span>
        <br/>
        <input onClick={suma}  type='button' value='+'/>
        <input onClick={resta} type='button' value='-'/>
    </div>
);
}

export default Contador;