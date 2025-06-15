import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

// Extend the NextAuth User type to include 'role'
declare module "next-auth" {
  interface User {
    role?: string;
    id?: string;
  }
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      id?: string;
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    id?: string;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
