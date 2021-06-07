import {
  AppBar,
  AppBarProps,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
} from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    top: 'auto',
    bottom: 0,
  },
  iconLink: {
    width: '100%',
  },
  iconButton: {
    width: '100%',
    color: theme.palette.primary.contrastText,
  },
}));

type BarButtonProps = {
  label: string;
  link: string;
  bottom?: boolean;
  onClick?: () => void;
};

export const BarButton: FC<BarButtonProps> = ({
  onClick,
  label,
  bottom,
  children,
  link,
  ...props
}) => {
  const classes = useStyles();
  const linkDestination = link === '#' ? '' : link;

  const extraProps: AppBarProps = {
    ...props,
  };
  if (bottom) extraProps.className = classes.bottomBar;

  const handleClick = () => {
    if (linkDestination) {
      const anchor = document.querySelector(linkDestination);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    if (onClick) onClick();
  };

  return (
    <Slide
      appear={false}
      in={!!linkDestination}
      direction={bottom ? 'up' : 'down'}
    >
      <AppBar position="fixed" {...extraProps}>
        <Toolbar>
          <IconButton
            arial-label={label}
            className={classes.iconButton}
            onClick={handleClick}
          >
            {children}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
