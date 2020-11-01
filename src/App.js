import Loadable from 'react-loadable';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar';

const App = () => {

  const LoadableIndex = Loadable({
    loader: () => import('./components/index/Index'),
    loading: Loader,
  });

  const LoadableFavorites = Loadable({
    loader: () => import('./components/favorites/Favorites'),
    loading: Loader,
  });

  const LoadableDetails = Loadable({
    loader: () => import('./components/details/Details'),
    loading: Loader,
  });

  return (
    <div className="App">
      <BrowserRouter path='/'>
        <Navbar />
        <Switch>
          <Route path="/details/:id" component={LoadableDetails} exact />
          <Route path="/favorites" component={LoadableFavorites} exact />
          <Route path="/index" component={LoadableIndex} exact />
          <Route path="/" component={LoadableIndex} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
