import { Container, makeStyles } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles({
  pageContainer: {
    minHeight: '100vh',
    minWidth: '100%',
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
    <Container className={classes.pageContainer} disableGutters {...props}>
      {children || ''}
    </Container>
  );
};
