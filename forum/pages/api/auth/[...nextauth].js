import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "ad270d019254a2c2613d",
            clientSecret: "0ffa9c453dd66adb4a8a1b930cb5e27317015a4a",
        }),
    ],
    secret: "qwer1234",
};
export default NextAuth(authOptions /*, { secret: process.env.AUTH_SECRET }*/);
