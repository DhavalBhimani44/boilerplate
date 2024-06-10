import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '../../../../lib/db'

function getGoogleCredentials(){
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    if(!clientId || clientId.length === 0){
        throw new Error('Google clientid not found');
    }
    if(!clientSecret || clientSecret.length === 0){
        throw new Error('Google clientsecret not found');
    }

    return {clientId, clientSecret};
}
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        })
    ],
    secret: process.env.SECRET,
    session:{
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV === 'development',
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.picture = user.image
            }
            return token
        },
        async session({session, token}){
            if(token){
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            }
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST} 