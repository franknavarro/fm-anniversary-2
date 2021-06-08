import AdbIcon from '@material-ui/icons/Adb';
import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { FC } from 'react';
import errorTheme from '../themes/errorTheme';
import { FloatingIcons } from './FloatingIcons';
import { PageContainer } from './PageContainer';
import Head from './Head';

const useStyles = makeStyles({
  errorPage: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ErrorPage: FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={errorTheme}>
      <Head
        title="Resource Not Found"
        description="This page does not exist."
        iconPrefix="dog"
      />
      <FloatingIcons Icon={AdbIcon} />
      <PageContainer className={classes.errorPage}>
        <Typography variant="h3" component="h1">
          This is not the web page you are looking for...
        </Typography>
      </PageContainer>
    </ThemeProvider>
  );
};

export default ErrorPage;
