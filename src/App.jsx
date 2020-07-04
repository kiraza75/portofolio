import React from 'react';
import Header from "./Header";
import {Project} from "./Projects"
import {About} from "./About"
import {Contact} from "./Contact"
//import './reset.css';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
          <Header />
        <Switch>
            <Route>
            </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;



