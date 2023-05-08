import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials!;
        if (username !== "suraj" || password !== "123321") return null;

        return new Promise(() => ({
          username: "Suraj",
        }));
      },
    }),
  ],
});
