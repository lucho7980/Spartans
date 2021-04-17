import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import CreateUser from './components/createUser'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './components/logIn'
import News from './components/createNews'
import  newsList from './components/newsList'
function App() {
  return (
    <Router>
    <div className="App">
     <Route path="/signup" component={CreateUser}/>
     <Route path="/login" component={LogIn}/>
     <Route path="/news" component={News}/>
     <Route path="/allnews" component={newsList}/>
    </div>
    </Router>
  );
}

export default App;
