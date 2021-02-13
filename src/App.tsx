import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useState } from 'react';
import { BarButton } from './components/BarButton';
import { FloatingHearts } from './components/FloatingHearts';
import { TimeGrid } from './components/TimeGrid';
import { counters } from './counters';

function App() {
  const [location, setLocation] = useState(0);

  const backLink = counters[location - 1]?.id || '';
  const nextLink = counters[location + 1]?.id || '';

  return (
    <>
      <BarButton
        label="previous time"
        link={`#${backLink}`}
        onClick={() => setLocation(location - 1)}
      >
        <ExpandLess />
      </BarButton>
      <FloatingHearts />
      {counters.map((time) => (
        <TimeGrid {...time} key={time.id} />
      ))}
      <BarButton
        label="previous time"
        bottom
        link={`#${nextLink}`}
        onClick={() => setLocation(location + 1)}
      >
        <ExpandMore />
      </BarButton>
    </>
  );
}

export default App;
