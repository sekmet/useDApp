import { Chain } from '../../constants'

export const Aurora: Chain = {
  chainId: 1313161554,
  chainName: 'Aurora',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x733ABFabEAB0124b240f2d8C56Ca736f58A4D760',
  getExplorerAddressLink: (address: string) => `https://explorer.aurora.dev/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.aurora.dev/tx/${transactionHash}`,
}

export const AuroraTestnet: Chain = {
  chainId: 1313161555,
  chainName: 'AuroraTestnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0x733ABFabEAB0124b240f2d8C56Ca736f58A4D760',
  getExplorerAddressLink: (address: string) => `https://explorer.mainnet.aurora.dev/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.mainnet.aurora.dev/tx/${transactionHash}`,
}

export default { Aurora, AuroraTestnet }
