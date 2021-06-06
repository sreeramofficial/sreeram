# Project Sreeram

Project sreeram is an open source NextJS blogging template with the following integrations in built.

## Features & Integrations

- PWA
- Material UI
- Jest
- Mongo DB
- Auth0
- Stripe

## Setup

1. Clone the [repo](https://github.com/sreeramofficial/sreeram)

2) Set the following environment variables and you are good to go.

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

### Demo

<iframe src="https://codesandbox.io/embed/cool-sky-l38hk?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Project Sreeram"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

[![Edit Project Sreeram](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/cool-sky-l38hk?fontsize=14&hidenavigation=1&theme=dark&view=preview)
