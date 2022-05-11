import Link from "next/link";
import React, { useState } from "react";
import { ethers } from "ethers";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  //Connect Wallet Function
  const connectWalletHandler = () => {
    if (window.ethereum) {
      // metamask is here I think
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  // //The following code has been commented out due to an issue with ReferenceError: window is not defined
  // const chainChangedHandler = () => {
  //   window.location.reload();
  // };

  // //when switching account address this updates the account address and balance on display
  // window.ethereum.on("accountsChanged", accountChangedHandler);

  // //this forces the user to re login just in case whatever is displayed on page is not matching with wallet when performing transaction
  // window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div className="absolute flex z-10 sm:left-2/3 sm:top-16 sm:py-8 ">
      <div className="inline-block text-white font-bold px-4 py-4">
        <button
          onClick={connectWalletHandler}
          className="rounded-xl bg-yellow-500 px-2 py-1 mb-1"
        >
          {connButtonText}
        </button>

        <div className="text-xs">
          <h3>Address: {defaultAccount}</h3>
        </div>
        <div className="text-xs">
          <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
      </div>
    </div>
  );
};

export default WalletCard;
