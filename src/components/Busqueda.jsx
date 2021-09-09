import React, {useState} from "react";
//Aquí se hace la conexión entre las action, el reducer y la store
import {connect} from 'react-redux';
import {mostrarAlert} from '../actions';

function Busqueda (props) {
    const [shower, setShower] = useState({
        inputText:''
    });

    function handleChange (event) {
        //se guarda con bracket notation para tomar el name del input, que puede variar en caso de más tags Html.
        setShower({[event.target.name]: event.target.value});
    }

    function handleSubmit(e) {
        //Obligatorio prevenDefault en forms-submit
        e.preventDefault();
        props.mostrarAlert(shower);
        alert(props.estado[0].inputText + '  ---  store state: ' + props.estado[0].status);
    }

return (
    <div>
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Searching Section</h1>
            <span>Mostrador OnChange: {shower.inputText}</span>
            <br/>
            <input name='inputText' value={shower.inputText} onChange={handleChange}  type='text' placeholder='escriba un texto...'/>
            <button type="submit">Mostrar</button>
        </form>
    </div>
);
}


//traerse el state del reducer a props.estado
function mapStateToProps(state) {
    return {estado: state};
  }
  
  //traerse la acción dispachada a props.mostrarAlert
  function mapDispatchToProps(dispatch) {
    return {
        mostrarAlert: element => dispatch(mostrarAlert(element)),
    };
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Busqueda);