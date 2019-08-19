import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage.component';

const HatsPage = (props) => {
  return (
  <div>
    <Link to='/'>Home</Link><br />
    Hello
  </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hat' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
