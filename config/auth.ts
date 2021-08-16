import dotenv from "dotenv";

dotenv.config();

interface I_GitHub_Auth_Config {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}

export const GitHubAuthConfig: I_GitHub_Auth_Config = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID ?? "",
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET ?? "",
};
