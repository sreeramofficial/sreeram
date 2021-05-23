import React from 'react';
import { useRouter } from 'next/router';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeCheckout } from '@sreeram.io/alpha';

const useStyles = makeStyles(theme => ({
  div: {
    padding: 20,
    display: 'flex',
    margin: 'auto',
    flexWrap: 'wrap',
  },
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
}));

const Premium = () => {
  const classes = useStyles();
  const router = useRouter();
  const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Sreeram Padmanabhan'
            height='195'
            image='/sections/dev.svg'
            title='Sreeram Padmanabhan' />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              Premium <span style={{ float: 'right' }}>€4.99</span>
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              1 year access to all paid content. (50% OFF)
            </Typography>
          </CardContent>
        </CardActionArea>
        <Elements stripe={promise}>
          <StripeCheckout onSuccess={() => router.push('/api/stripe/callback')} />
        </Elements>
      </Card>
    </div>
  );
};

export default Premium;
