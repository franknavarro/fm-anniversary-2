import { Grid, makeStyles, Typography } from '@material-ui/core';
import {
  Dispatch,
  forwardRef,
  RefObject,
  SetStateAction,
  useEffect,
} from 'react';
import { PageContainer } from '../components/PageContainer';
import { TimeBox } from '../components/TimeBox';

const useStyles = makeStyles({
  timeGrid: {
    minHeight: '100vh',
  },
  gridFront: {
    zIndex: 100,
  },
  innerGrid: {
    '.MuiGrid-item&': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
});

export type TimeItem = {
  primaryText: string;
  secondaryText?: string;
  startTime: string;
  endTime?: string;
  useTotals?: boolean;
  ref: RefObject<HTMLDivElement>;
};

interface TimeGridProps extends Omit<TimeItem, 'ref'> {
  setLocation: Dispatch<SetStateAction<number>>;
  index: number;
}

export const TimeGrid = forwardRef<HTMLDivElement, TimeGridProps>(
  (
    {
      endTime,
      index,
      primaryText,
      secondaryText,
      setLocation,
      startTime,
      useTotals,
    },
    ref,
  ) => {
    const classes = useStyles();

    useEffect(() => {
      let observerRef = (ref as RefObject<HTMLDivElement>).current;
      const observerCallback: IntersectionObserverCallback = (entries) => {
        if (entries[0].intersectionRatio > 0) {
          setLocation(index);
        }
      };
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75,
      };
      const observer = new IntersectionObserver(observerCallback, options);

      if (observerRef) observer.observe(observerRef);

      return () => {
        if (observerRef) observer.unobserve(observerRef);
      };
    }, [index, setLocation, ref]);

    const renderTextGrid = (text: string | undefined) => {
      return (
        text && (
          <Grid container item justify="center" xs={12}>
            <Typography align="center" variant="h3" component="h1">
              {text}
            </Typography>
          </Grid>
        )
      );
    };

    return (
      <PageContainer ref={ref}>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.timeGrid}
        >
          <Grid
            container
            item
            xs={12}
            justify="center"
            spacing={10}
            className={classes.gridFront}
          >
            {renderTextGrid(primaryText)}
            <Grid
              container
              item
              justify="center"
              xs={12}
              spacing={4}
              className={classes.innerGrid}
            >
              <TimeBox
                startTime={startTime}
                endTime={endTime}
                units={['year', 'month', 'day', 'hour', 'minute', 'second']}
                useTotals={useTotals}
                xs={6}
                sm={4}
                lg="auto"
              />
            </Grid>
            {renderTextGrid(secondaryText)}
          </Grid>
        </Grid>
      </PageContainer>
    );
  },
);
