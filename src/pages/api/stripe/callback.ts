import { getSession } from '@auth0/nextjs-auth0';

import { writeUserData } from '@/pages/api/database';

export default async function callback(req, res) {
  try {
    const session = await getSession(req, res);
    if (!session) return res.redirect('/api/auth/login?redirectTo=/api/stripe/callback');

    const { user: { sub: custId } } = session;
    writeUserData(custId, 1);

    res.redirect('/api/auth/login?redirectTo=/?payment=success');
  } catch (error) {
    res.redirect('/api/auth/login?redirectTo=/?payment=failure');
  }
}
