import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { GitHubAuthConfig } from "../../../config/auth";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: GitHubAuthConfig.GITHUB_CLIENT_ID,
      clientSecret: GitHubAuthConfig.GITHUB_CLIENT_SECRET,
    }),
    // More providers can be added over here
  ],
  //   database (optional but recommended)
  // database : [DATABSE_URL] ,
});
