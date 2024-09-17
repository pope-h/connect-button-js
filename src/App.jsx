import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
// import ConnectButton from "./components/ConnectButton";
import useWallectConnect from "./hooks/useWalletConnect";

// 1. Get projectId
const projectId = "57c3ed3f7633af987eda789d503edfee"; // project ID gotten from a sample project

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  auth: {
    email: false, // default to true
    socials: [],
    showWallets: true, // default to true
    walletFeatures: true, // default to true
  },

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a AppKit instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export default function App() {
  const wallectConnect = useWallectConnect();

  return wallectConnect;
}