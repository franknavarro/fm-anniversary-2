import { makeStyles, Paper } from '@material-ui/core';
import { forwardRef, ReactNode } from 'react';

const useStyles = makeStyles({
  pageContainer: {
    minHeight: '100vh',
    minWidth: '100%',
  },
});

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, ...props }, ref) => {
    const classes = useStyles();

    return (
      <Paper
        className={classes.pageContainer}
        square
        elevation={0}
        {...props}
        ref={ref}
      >
        {children || ''}
      </Paper>
    );
  },
);
