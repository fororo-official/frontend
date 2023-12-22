import {
  AUTH_PROVIDER,
  SUPPORTED_ETHEREUM_NETWORKS,
  THEME,
  WALLET_PROVIDER,
  init,
} from "@ramper/ethereum";

const initWallet = async () => {
  init({
    appName: "EVM Test App",
    authProviders: [
      AUTH_PROVIDER.GOOGLE,
      AUTH_PROVIDER.FACEBOOK,
      AUTH_PROVIDER.TWITTER,
      AUTH_PROVIDER.APPLE,
      AUTH_PROVIDER.EMAIL,
    ],
    walletProviders: [WALLET_PROVIDER.METAMASK],
    network: SUPPORTED_ETHEREUM_NETWORKS.MATICMUM,
    theme: THEME.DARK,
  });
};

export { initWallet };
