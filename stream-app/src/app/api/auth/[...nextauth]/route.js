import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
                return {
                    name: 'Ahad',
                    email: 'ahad@gmail.com',
                    image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg'
                }
                // return null
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
    session: {
        jwt: true
    }
});

export { handler as GET, handler as POST }