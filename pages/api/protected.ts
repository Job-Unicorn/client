import { getSession } from "next-auth/client";
import { NextAuthRequest, NextAuthResponse } from "next-auth/internals";

export default async (req: NextAuthRequest, res: NextAuthResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};
