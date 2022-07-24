import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from "./Pages/TeamPage";
import MainPage from "./Pages/MainPage";
import MatchPage from "./Pages/MatchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route path="/teams">
            <MainPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
