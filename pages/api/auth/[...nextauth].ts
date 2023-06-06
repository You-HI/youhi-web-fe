import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { googleClientId, googleClientSecret } from 'src/constants/env';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret
    })
  ]
});