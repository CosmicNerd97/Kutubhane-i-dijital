/** @format */

import { NextAuthOptions } from "next-auth";

const options: NextAuthOptions = {
  providers: [],

  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async redirect({ url, baseUrl }: any) {
      return baseUrl;
    },

    async signIn({ user, account, profile, email, credentials }: any) {
      return true;
    },
  },
};

export default options;
