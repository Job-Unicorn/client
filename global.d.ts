import { WalletConnection, Contract } from "near-api-js";

export declare global {

    interface Window {
        accountId: any;
        jobUnicornWalletConnection: WalletConnection;
        jobUnicornContract: Contract;

    }

}