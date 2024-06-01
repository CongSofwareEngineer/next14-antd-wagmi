export enum ChaiID {
  Polygon = 137,
  Ethereum = 1,
  Binance = 56,
  Arbitrum = 42161
}

export enum MethodConnect {
  WalletConnectV1 = 'WalletConnectV1',
  EZWallet = 'EZWallet',
  HardWallet = 'HardWallet',
  Metamask = 'Metamask',
  Web3Modal = 'Web3Modal'
}

export enum CookieKeys {
  ChainId = 'ChainId',
  ConnectionMethod = 'ConnectionMethod',
  WalletConnectSessionV1 = 'WalletConnectSessionV1',
  HardWalletSession = 'HardWalletSession',
  EzWalletSession = 'EzWalletSession',
  AccessToken = 'AccessToken'
}
