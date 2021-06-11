import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Menu from './views/Menu';
import About from './views/About';
import Profile from './views/Profile';
import Status from './views/Status';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/status" component={Status} />
      </Switch>
    </>
  );
}

export default App;
