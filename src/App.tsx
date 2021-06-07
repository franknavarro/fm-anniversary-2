import { CssBaseline } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
          <PageLayout
            useCounter={useAniversaryCounters}
            theme={loveTheme}
            Icon={FavoriteIcon}
          />
        </Route>
        <Route path="/eevee" exact>
          <PageLayout
            useCounter={useEeveeCounters}
            theme={loveTheme}
            Icon={FavoriteIcon}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
