import { makeStyles } from '@material-ui/core';
import { useWindowSize } from '../hooks/useWindowSize';
import './FloatingHearts.css';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1000,
  },
  heart: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: "''",
      left: 0,
      top: 0,
      width: '18px',
      height: '30px',
      background: '#cc2022',
      borderRadius: '30px 30px 0 0',
      transform: 'rotate(45deg)',
      transformOrigin: '100% 100%',
    },
    '&:before': {
      position: 'absolute',
      content: "''",
      left: '18px',
      top: 0,
      width: '18px',
      height: '30px',
      background: '#cc2022',
      borderRadius: '30px 30px 0 0',
      transform: 'rotate(-45deg)',
      transformOrigin: '0 100%',
    },
  },
});

const randomNumber = (min: number, max: number, decimals = 0) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

export const FloatingHearts = () => {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const hearts = Math.floor(windowSize.width / 50);

  return (
    <div className={classes.root}>
      {[...Array(hearts)].map((_, index) => {
        const position = randomNumber(index * 50, (index + 1) * 50);
        return (
          <div
            key={position}
            className={classes.heart}
            style={{
              left: `${position}px`,
              transform: `scale(${randomNumber(0.75, 1, 2)})`,
              opacity: randomNumber(0.3, 1, 2),
              animation:
                `moveclouds ${randomNumber(10, 25)}s linear infinite,` +
                `sideWays ${randomNumber(
                  2,
                  5,
                )}s ease-in-out infinite alternate`,
            }}
          />
        );
      })}
    </div>
  );
};
