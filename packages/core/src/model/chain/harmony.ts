import { Chain } from '../../constants'

export const Harmony: Chain = {
  chainId: 1666600000,
  chainName: 'Harmony',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xFE4980f62D708c2A84D3929859Ea226340759320',
  getExplorerAddressLink: (address: string) => `https://explorer.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.harmony.one/tx/${transactionHash}`,
}

export const HarmonyTestnet: Chain = {
  chainId: 1666700000,
  chainName: 'HarmonyTestnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xEFefb2a9965fC6Cec21c00894b4D0c5cCe1a6fbA',
  getExplorerAddressLink: (address: string) => `https://explorer.testnet.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.testnet.harmony.one/tx/${transactionHash}`,
}

export default { Harmony, HarmonyTestnet }
