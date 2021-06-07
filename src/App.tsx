import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { RefObject, useEffect, useState } from 'react';
import { BarButton } from './components/BarButton';
import { FloatingHearts } from './components/FloatingHearts';
import { TimeGrid } from './components/TimeGrid';
import useAniversaryCounters from './hooks/useAniversaryCounters';

const EMPTY_REF = { current: null };

function App() {
  const counters = useAniversaryCounters();

  const [location, setLocation] = useState<number>(0);
  const [prevPage, setPrevPage] = useState<RefObject<HTMLDivElement>>(
    EMPTY_REF,
  );
  const [nextPage, setNextPage] = useState<RefObject<HTMLDivElement>>(
    EMPTY_REF,
  );

  // This makes sure refs are initialized after render
  useEffect(() => {
    setPrevPage(counters[location - 1]?.ref || EMPTY_REF);
    setNextPage(counters[location + 1]?.ref || EMPTY_REF);
  }, [counters, location]);

  return (
    <>
      <BarButton label="previous time" pageRef={prevPage}>
        <ExpandLess />
      </BarButton>
      <FloatingHearts />
      {counters.map(({ ref, ...timeProps }, index) => (
        <TimeGrid
          {...timeProps}
          ref={ref}
          key={index}
          setLocation={setLocation}
          index={index}
        />
      ))}
      <BarButton label="previous time" bottom pageRef={nextPage}>
        <ExpandMore />
      </BarButton>
    </>
  );
}

export default App;
