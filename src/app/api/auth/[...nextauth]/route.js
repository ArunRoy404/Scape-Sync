import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: 'Email', type: 'email' },
            password: { label: "Password", type: "password" },
            rememberMe: { label: "Remember Me", type: "checkbox" },
        },
        async authorize(credentials) {
            try {
                const formdata = new FormData();
                formdata.append("email", credentials.email);
                formdata.append("password", credentials.password);
                formdata.append("remember_me", credentials.rememberMe ? "true" : "false");

                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };

                const res = await fetch("https://apitest.softvencefsd.xyz/api/login", requestOptions)
                const data = await res.json();

                if (res.ok && data.status) {
                    return {
                        id: data.data.id,
                        firstName: data.data.first_name,
                        lastName: data.data.last_name,
                        email: data.data.email,
                        role: data.data.role,
                        token: data.token,
                    };
                }
                return null;
            } catch (err) {
                return null;
            }
        }
    })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token;
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }