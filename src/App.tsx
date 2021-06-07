import { CssBaseline } from '@material-ui/core';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import { useAniversaryCounters, useEeveeCounters } from './hooks/useCounters';
import loveTheme from './themes/loveTheme';

const App: FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/" exact>
          <PageLayout useCounter={useAniversaryCounters} theme={loveTheme} />
        </Route>
        <Route path="/eevee" exact>
          <PageLayout useCounter={useEeveeCounters} theme={loveTheme} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
