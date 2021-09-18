import React, { ComponentType, useEffect, useState } from "react";
import AuthenticatedWrapper from "../../layouts/AuthenticatedWrapper";
import LandingPageWrapper from "../../layouts/LandingPageWrapper";
import NotAuthenticatedWrapper from "../../layouts/NotAuthenticatedWrapper";
import { init , getWalletConnection} from "../../utils/near/init";
import NotAuthorized from "./NotAuthorized";

type INeedsAuthentication = "NEEDS_AUTHENTICATION" | "DOES_NOT_NEED_AUTHENTICATION" | "LANDING_PAGE"

export function withNearWallet<P>(Inner : ComponentType<P>, needsAuthentication : INeedsAuthentication) {

  const Wrapped = (props: P) => {
    const [signedIn, setSignedIn] = useState(false);
    
    useEffect(() => {
      init().then(() => {
        setSignedIn(getWalletConnection().isSignedIn())
      })
    }, []);
    if (needsAuthentication === "LANDING_PAGE"){
      return (
        <LandingPageWrapper>
          <Inner {...props} />
        </LandingPageWrapper>
      )

    } else if (signedIn) {
      return (
        <AuthenticatedWrapper >
          <Inner {...props}/>
        </AuthenticatedWrapper>
      )
    } else if (signedIn == false && needsAuthentication === "DOES_NOT_NEED_AUTHENTICATION") {
      return (
        <NotAuthenticatedWrapper>
          <Inner {...props}/>
        </NotAuthenticatedWrapper>
      )
    } else if (signedIn == false && needsAuthentication === "NEEDS_AUTHENTICATION") {
      return (
        <NotAuthenticatedWrapper>
          <NotAuthorized />
        </NotAuthenticatedWrapper>
      )
    } else {
      return (
        <NotAuthenticatedWrapper>
          <NotAuthorized />
        </NotAuthenticatedWrapper>
      )
    }

  };
    
  return Wrapped;
}

