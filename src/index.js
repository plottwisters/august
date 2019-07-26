import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,  Switch, NavLink } from "react-router-dom";

import Home from './Home';
import App from './App';
import Module from './components/module';
import * as serviceWorker from './serviceWorker';

export default function Index(props)  {
  return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/play" component={App} />
        <Route exact path="/play/:id" component={Module} />
        </Switch>
      </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
