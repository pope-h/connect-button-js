import { useState } from "react";
import ConnectButton from "../components/ConnectButton";
import styles from "../styles/Home.module.css";

const WalletConnect = () => {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div
          className={styles.backdrop}
          style={{
            opacity: isConnectHighlighted || isNetworkSwitchHighlighted ? 1 : 0,
          }}
        />
        <div className={styles.container}>
          <div className={styles.buttons}>
            <div
              onClick={closeAll}
              className={`${styles.highlight} ${
                isNetworkSwitchHighlighted ? styles.highlightSelected : ""
              }`}
            >
              <w3m-network-button />
            </div>
            <div
              onClick={closeAll}
              className={`${styles.highlight} ${
                isConnectHighlighted ? styles.highlightSelected : ""
              }`}
            >
              <ConnectButton />
              {/* Could also use <w3m-button /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
