/** @format */

import TicTacToe from "./Components/TicTacTow/TicTacToe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <TicTacToe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
