import clsx from 'clsx';
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
  className?: string;
};

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ children, className }, ref) => {
    const classes = useStyles();

    return (
      <Paper
        className={clsx(classes.pageContainer, className)}
        square
        elevation={0}
        ref={ref}
      >
        {children || ''}
      </Paper>
    );
  },
);
