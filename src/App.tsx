import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Switch,HashRouter, Route, Link, Redirect } from "react-router-dom";


import Home from './pages/Home/Home'

function App() {
  return (
    <HashRouter>
      {/* <Life {...obj}></Life> */}

      <Switch>
        {/* <Route path="/" exact render={() => <Redirect to="/comp1"/> } /> */}
        {/* <Route path="/life" {...obj} component={Life}></Route>
            <Route path="/self" component={Self}></Route> */}
        {/* <Route exact path="/comp2" component={Comp2}></Route>  */}
        {/* <Route path="/login" component={Login}></Route> */}
        <Route path="/" component={Home} ></Route>

      </Switch>

    </HashRouter>
  );
}

export default App;
