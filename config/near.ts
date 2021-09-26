// const jobUnicornContractID = "jobUnicorn"

export interface NearConfig {
	networkId: string
	nodeUrl: string
	masterAccount?: string
	walletUrl?: string
	helperUrl?: string
	explorerUrl?: string
	keyPath?: string
	// job_unicorn_contract_id: string,
}

export type NearEnv = 'TEST' | 'MAIN'

const MAINNET_CONFIG: NearConfig = {
  networkId: 'mainnet',
  nodeUrl: 'https://rpc.mainnet.near.org',
  walletUrl: 'https://wallet.near.org',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://explorer.mainnet.near.org',
  // job_unicorn_contract_id: jobUnicornContractID,
}

const TESTNET_CONFIG: NearConfig = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  explorerUrl: 'https://explorer.testnet.near.org',
  // job_unicorn_contract_id: jobUnicornContractID,
}

export const getConfig = (env: NearEnv): NearConfig => {
  switch (env) {
  case 'TEST':
    return TESTNET_CONFIG
  case 'MAIN':
    return MAINNET_CONFIG
  default:
    throw new Error(`Unknown environment: ${env}`)
  }
}
