import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import RestaurantDetails from './containers/RestaurantDetails';
import Restaurants from './containers/Restaurants';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/restaurants/:id/update"
            component={RestaurantDetails}
          />
          <Route exact path="/restaurants/:id" component={Restaurants} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
