import './App.css';
import CountryList from './CountryList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/theWorld" exact >
            <CountryList />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
