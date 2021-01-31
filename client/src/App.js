import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import RestaurantUpdatePage from './containers/RestaurantUpdatePage';
import RestaurantDetailsPage from './containers/RestaurantDetailsPage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={RestaurantUpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailsPage}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
