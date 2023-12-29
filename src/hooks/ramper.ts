import {
  AUTH_PROVIDER,
  SUPPORTED_ETHEREUM_NETWORKS,
  THEME,
  WALLET_PROVIDER,
  init,
} from "@ramper/ethereum";

function initWallet() {
  init({
    appId: "hrbpivofet",
    appName: "FORIF",
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
    issueIdToken: true,
  });
}

export default initWallet;
