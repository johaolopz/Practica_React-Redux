// import logo from '../logo.svg';
import './App.css';
import Nav from '../components/Nav';
import Contador from '../components/Contador';
import { Route } from 'react-router';
import Busqueda from '../components/Busqueda';

function App() {
  return (
    <div className="App">
      <Route
      path='/'
      render = {() => <Nav />}
      />
      <Route
      path='/contador'
      render = {() => <Contador />}
      /><Route
      path='/buscador'
      render = {() => <Busqueda />}
      />
    </div>
  );
}

export default App;
