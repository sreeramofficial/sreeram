import React from 'react';
import { useRouter } from 'next/router';
import _get from 'lodash/get';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    '&:first-child': {
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
        marginBottom: 20,
      },
    },
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const Premium = () => {
  const classes = useStyles();
  const router = useRouter();
  const redirectTo = _get(router, 'query.redirectTo', '/');

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Sreeram Padmanabhan'
          height='195'
          image='/sections/dev.svg'
          title='Sreeram Padmanabhan' />
        <CardContent className={classes.cardContent}>
          <Typography variant='body1' color='textSecondary' component='p' style={{ marginBottom: 10 }}>
            Please login to access this content.
          </Typography>
          <Button variant='contained' color='primary' href={`/api/auth/login?redirectTo=${redirectTo}`}>Login</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Premium;
