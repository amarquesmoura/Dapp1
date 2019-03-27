import React, { useContext } from "react";
import { EthInfoContext } from "../state/context";

const EthInfo = () => {
  const ethInfo = useContext(EthInfoContext);
  
  return (
    <div>
      <h1>My Eth Info</h1>
      <p>Account: {ethInfo.accounts[0]}</p>
      <p>Balance: {ethInfo.balance}</p>
    </div>
  );
};

export default EthInfo;
