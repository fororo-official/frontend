import handleSignIn from "@/hooks/api/signin";
import ToastEmitter from "@/hooks/toastEmitter";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id_token = account.id_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.token = token;
      return session;
    },
    async signIn({ user, account, profile }) {
      if (profile && user && account) {
        if (profile.email?.endsWith("hanyang.ac.kr")) {
          const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;

          const data = await handleSignIn(account.id_token);

          if (data.status === 200) return true;
          else return `/auth/error/?errorCode=${data.status}`;
        }
      }
      ToastEmitter({ type: "success", text: "로그인에 성공했습니다!" });
      return true;
    },
  },
} satisfies NextAuthOptions;

function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { auth, authOptions };
