import { ThemeProvider, ThemeProviderProps } from '@material-ui/core';
import { ExpandLess, ExpandMore, SvgIconComponent } from '@material-ui/icons';
import { FC, RefObject, useEffect, useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounters';
import { BarButton } from './BarButton';
import { FloatingIcons } from './FloatingIcons';
import { TimeGrid } from './TimeGrid';

const EMPTY_REF = { current: null };

interface PageLayoutProps {
  theme: ThemeProviderProps['theme'];
  useCounter: useCounter;
  Icon: SvgIconComponent;
}

const PageLayout: FC<PageLayoutProps> = ({ theme, useCounter, Icon }) => {
  const counters = useCounter();

  const [location, setLocation] = useState<number>(0);
  const [prevPage, setPrevPage] = useState<RefObject<HTMLDivElement>>(
    EMPTY_REF,
  );
  const [nextPage, setNextPage] = useState<RefObject<HTMLDivElement>>(
    EMPTY_REF,
  );

  const animations = useMemo(() => <FloatingIcons Icon={Icon} />, [Icon]);

  // This makes sure refs are initialized after render
  useEffect(() => {
    setPrevPage(counters[location - 1]?.ref || EMPTY_REF);
    setNextPage(counters[location + 1]?.ref || EMPTY_REF);
  }, [counters, location]);

  return (
    <ThemeProvider theme={theme}>
      <BarButton label="previous time" pageRef={prevPage}>
        <ExpandLess />
      </BarButton>
      {animations}
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
    </ThemeProvider>
  );
};

export default PageLayout;
