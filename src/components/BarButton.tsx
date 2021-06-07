import {
  AppBar,
  AppBarProps,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
} from '@material-ui/core';
import { FC, RefObject, useEffect } from 'react';

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
  pageRef: RefObject<HTMLDivElement>;
  bottom?: boolean;
  onClick?: () => void;
};

export const BarButton: FC<BarButtonProps> = ({
  bottom,
  children,
  label,
  onClick,
  pageRef,
  ...props
}) => {
  const classes = useStyles();

  const extraProps: AppBarProps = {
    ...props,
  };
  if (bottom) extraProps.className = classes.bottomBar;

  useEffect(() => {}, [pageRef]);

  const handleClick = () => {
    if (pageRef?.current) {
      pageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (onClick) onClick();
  };

  return (
    <Slide
      appear={false}
      in={!!pageRef?.current}
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
