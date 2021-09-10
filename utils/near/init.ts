import { connect, keyStores, WalletConnection } from "near-api-js";
import { getConfig, NearConfig, NearEnv } from "../../config/near";

export const nearConfig : NearConfig = getConfig((process.env.NEAR_ENV as NearEnv) || "TEST");

export const init = async () => {

  // Initializing connection to the NEAR network.
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));


  window.near = near

  // Initializing Wallet.
  window.jobUnicornWalletConnection = new WalletConnection(near, "jobunicorn");
  
  // Setting the wallet account ID  if it is not set. 
  window.accountId = window.jobUnicornWalletConnection.getAccountId()


}

export const getWalletConnection = () => {
  return window.jobUnicornWalletConnection;
}

export const login = () => {
  // Requesting sign in.
  window.jobUnicornWalletConnection.requestSignIn()
}

export const logout = () => {
  // Signing out.
  window.jobUnicornWalletConnection.signOut()
  window.location.reload()
}

export const getAddress =  () : string => {
  const address = window.jobUnicornWalletConnection._authData.allKeys[0]
  return address
}