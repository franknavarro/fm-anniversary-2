import { makeStyles } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import { FC } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const iconSpacing = 30;

const useStyles = makeStyles({
  floatingIcon: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  icon: {
    position: 'absolute',
    animationName: '$moveclouds, $sideWays',
    animationTimingFunction: 'linear, ease-in-out',
    animationIterationCount: 'infinite, infinite',
    animationDirection: 'normal, alternate',
  },
  '@keyframes moveclouds': {
    '0%': {
      top: '100vh',
    },
    '100%': {
      top: '-10vh',
    },
  },
  '@keyframes sideWays': {
    '0%': {
      marginLeft: '0px',
    },
    '100%': {
      marginLeft: `${iconSpacing}px`,
    },
  },
});

interface FloatingIconsProps {
  Icon: SvgIconComponent;
}

const randomNumber = (min: number, max: number, decimals = 0) => {
  return (Math.random() * (max - min) + min).toFixed(decimals);
};

export const FloatingIcons: FC<FloatingIconsProps> = ({ Icon }) => {
  const classes = useStyles();
  const windowSize = useWindowSize();

  const hearts = Math.floor(windowSize.width / iconSpacing);

  return (
    <div className={classes.floatingIcon}>
      {[...Array(hearts)].map((_, index) => {
        const position = randomNumber(
          index * iconSpacing,
          (index + 1) * iconSpacing,
        );
        return (
          <Icon
            key={index}
            fontSize="large"
            className={classes.icon}
            htmlColor="#cc2022"
            style={{
              left: `${position}px`,
              transform: `scale(${randomNumber(0.75, 1, 2)})`,
              opacity: randomNumber(0.3, 1, 2),
              animationDuration: `${randomNumber(10, 25)}s, ${randomNumber(
                2,
                5,
              )}s`,
            }}
          />
        );
      })}
    </div>
  );
};
