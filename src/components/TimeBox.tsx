import { Grid, GridProps, makeStyles, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { countUnits, CountUnitsOptions } from '../helpers/countUnits';

const useStyles = makeStyles({
  timeBox: { flexGrow: 1 },
});

export const TimeBox: FC<CountUnitsOptions & GridProps> = ({
  endTime,
  startTime,
  units,
  useTotals,
  ...props
}) => {
  const classes = useStyles();
  const runCounter = () => countUnits({ startTime, endTime, units, useTotals });

  const [time, setTime] = useState(runCounter());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(runCounter());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {time.map(([value, unit]) => {
        return (
          <Grid item key={unit} className={classes.timeBox} {...props}>
            <Typography variant="h3" align="center">
              <NumberFormat
                value={value}
                displayType="text"
                thousandSeparator
              />
            </Typography>
            <Typography variant="h3" align="center">
              {unit}
            </Typography>
          </Grid>
        );
      })}
    </>
  );
};
