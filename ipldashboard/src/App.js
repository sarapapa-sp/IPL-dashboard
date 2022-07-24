import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from "./Pages/TeamPage";
import MainPage from "./Pages/MainPage";
import MatchPage from "./Pages/MatchPage";

function App() {
  return (
    <div className="App">
      {/* <Router>
        
          <Route path="/teams/:teamName" component={TeamPage}></Route>
        
      </Router> */}

      <Router>
        <Switch>
        {/* <Route path="/" component={MainPage}></Route> */}
        <Route path="/teams/:teamName/matches/:year">
          <MatchPage />
        </Route>
        <Route path="/teams/:teamName">
          <TeamPage />
        </Route>

        </Switch>
      </Router>

      {/* <TeamPage /> */}
    </div>
  );
}

export default App;
