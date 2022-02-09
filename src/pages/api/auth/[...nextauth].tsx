import NextAuth from "next-auth"
import { query as q } from 'faunadb'
import Providers from 'next-auth/providers';

import { fauna } from '../../../services/fauna'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user',
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      console.log("Entrei")
      const { email } = user;
      console.log("email", email)
      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { email } }
          )
        )
        return true
      } catch (error) {
        console.log("error", error)
      }
    },
  }
})