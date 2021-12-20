import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { LoopApp } from './pages/LoopApp';

export function App() {

  return (
    <Router>
      <AppHeader />
      <main className="container">
        <Switch>
          <Route path="/" component={LoopApp} />
        </Switch>
      </main>
    </Router>
  );
}


