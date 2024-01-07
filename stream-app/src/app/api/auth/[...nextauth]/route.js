import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const { NEXT_PUBLIC_ENDPOINT, NEXT_PUBLIC_NEXT_AUTH_SECRET } = process.env;

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Email',
                    type: 'email',
                    name: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    name: 'password'
                }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;

                try {
                    const response = await axios({
                        method: 'GET',
                        url: `${NEXT_PUBLIC_ENDPOINT}/api/user?email=${email}&password=${password}`
                    });

                    return response.data.data.user;

                } catch (error) {
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        })
    ],
    secret: NEXT_PUBLIC_NEXT_AUTH_SECRET,
    pages: {
        signIn: '/login'
    },
    session: {
        jwt: true
    }
});

export { handler as GET, handler as POST }