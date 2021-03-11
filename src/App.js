import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import TeamDetail from './Component/TeamDetail/TeamDetail';


function App() {
  return (
    <Router>
        <Switch>
            <Route path = "/home">
                <Home/>
            </Route>
            <Route path = "/teamDetail/:teamId">
              <TeamDetail/>
            </Route>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route path = "*">
                <NotFound/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
