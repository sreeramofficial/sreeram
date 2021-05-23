import stripe from 'stripe';

const Stripe = stripe(process.env.STRIPE_SECRET_KEY);

export default async function intent(req, res) {
  try {
    // eslint-disable-next-line camelcase
    const { client_secret } = await Stripe.paymentIntents.create({
      amount: Number(process.env.STRIPE_PAYMENT_VALUE),
      currency: process.env.STRIPE_PAYMENT_CURRENCY,
    });
    res.send({
      // eslint-disable-next-line camelcase
      clientSecret: client_secret,
    });
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}
