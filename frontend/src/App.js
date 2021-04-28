import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateUser from './components/createUser';
import CreateDds from './components/ddsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div className="container">
     <Route path="/users" component={CreateUser}/>
     <Route path="/dds" component={CreateDds}/>
    </div>
    </Router>
  );
}

export default App;
