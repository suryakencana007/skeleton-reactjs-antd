import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from 'kao-containers/Home';
import Counter from 'kao-containers/Counter';
import 'kao-styles/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/counter" component={Counter} />
  </Switch>
);

export default App;
