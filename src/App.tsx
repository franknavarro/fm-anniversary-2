import { CssBaseline } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PetsIcon from '@material-ui/icons/Pets';
import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import { useAniversaryCounters, useEeveeCounters } from './hooks/useCounters';
import doggyTheme from './themes/doggyTheme';
import loveTheme from './themes/loveTheme';
import Head from './components/Head';
import ErrorPage from './components/ErrorPage';

const App: FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/" exact>
          <Head
            title="F + M"
            description="Counting the days of Frank and Missy's love"
            iconPrefix="heart"
          />
          <PageLayout
            useCounter={useAniversaryCounters}
            theme={loveTheme}
            Icon={FavoriteIcon}
          />
        </Route>
        <Route path="/eevee" exact>
          <Head
            title="Eevee"
            description="Counting the days for Eevee"
            iconPrefix="dog"
          />
          <PageLayout
            useCounter={useEeveeCounters}
            theme={doggyTheme}
            Icon={PetsIcon}
          />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
