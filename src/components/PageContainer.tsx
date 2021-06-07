import { Container, makeStyles } from '@material-ui/core';
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
      <Container
        className={classes.pageContainer}
        disableGutters
        {...props}
        ref={ref}
      >
        {children || ''}
      </Container>
    );
  },
);
