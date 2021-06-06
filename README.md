# Project Sreeram

Project Icarus is an open source NextJS blogging templat with the following integrations in built.

## Features & Integrations

- PWA
- Material UI
- Jest
- Mongo DB
- Auth0
- Stripe

## Setup

Set the following environment variables and you are good to go.

`.env`

    STRIPE_PAYMENT_VALUE
    STRIPE_PAYMENT_CURRENCY

`.env.development`

    NEXT_PUBLIC_DOMAIN=http://localhost:3001
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    MONGO_DB

`.env.production`

    NEXT_PUBLIC_DOMAIN
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    MONGO_DB

Production and in `.env.local`

    AUTH0_SECRET
    AUTH0_ISSUER_BASE_URL
    AUTH0_BASE_URL
    AUTH0_CLIENT_ID
    AUTH0_CLIENT_SECRET
    AUTH0_SCOPE=openid profile email
    MONGO_URL
    STRIPE_SECRET_KEY
    
### Run

```bash
npm run dev
```
