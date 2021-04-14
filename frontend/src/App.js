import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateUser from './components/createUser'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/users" component={CreateUser}/>
    </div>
    </Router>
  );
}

export default App;
