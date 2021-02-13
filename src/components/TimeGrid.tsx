import { Grid, makeStyles, Typography } from '@material-ui/core';
import { FC } from 'react';
import { PageContainer } from '../components/PageContainer';
import { TimeBox } from '../components/TimeBox';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
});

export type TimeGridProps = {
  primaryText: string;
  secondaryText?: string;
  startTime: string;
  endTime?: string;
  useTotals?: boolean;
  id?: string;
};

export const TimeGrid: FC<TimeGridProps> = ({
  primaryText,
  secondaryText,
  startTime,
  endTime,
  useTotals,
  id,
}) => {
  const classes = useStyles();

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
    <PageContainer id={id}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Grid container item xs={12} justify="center" spacing={10}>
          {renderTextGrid(primaryText)}
          <Grid container item justify="center" xs={12} spacing={4}>
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
};
