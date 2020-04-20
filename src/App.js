import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

function App() {
  return (
    <Router>
      {/* Todo lo que este por fuera es lo que se va a ver en toda la pagina */}
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Route exact path="/proyectos" component={Proyectos}/>
      </Switch>
    </Router>
  );
}

export default App;
