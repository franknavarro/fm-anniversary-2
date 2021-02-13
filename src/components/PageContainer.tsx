import { Container, makeStyles } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
  },
});

type PageContainerProps = {
  id?: string;
};

export const PageContainer: FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters {...props}>
      {children || ''}
    </Container>
  );
};
