import { WalletConnection, Contract, Near } from "near-api-js";

export declare global {

    interface Window {
        near: Near;
        accountId: any;
        jobUnicornWalletConnection: WalletConnection;
        jobUnicornContract: Contract;

    }

}