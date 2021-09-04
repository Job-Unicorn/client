import React, { ComponentType, useEffect, useState } from "react";
import { init , getWalletConnection} from "../../utils/near/init";
import NotAuthorized from "./NotAuthorized";

export function withNearWallet<P>(Inner : ComponentType<P>) {

  const Wrapped = (props: P) => {
    const [signedIn, setSignedIn] = useState(false);
    
    useEffect(() => {
      init().then(() => {
        setSignedIn(getWalletConnection().isSignedIn())
      })
    }, []);
    
    return signedIn ? (
      <Inner {...props}/>
    ) : (
      <NotAuthorized />
    )
  };
    
  return Wrapped;
}

