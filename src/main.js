import React from "react";
import { render } from "react-dom";
import EthInfo from "./Components/EthInfo";

import getWeb3 from "./utils/getWeb3";

(async function() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  let balance = await web3.eth.getBalance(accounts[0]);
  balance = web3.utils.fromWei(balance, "ether");

  render(
    <div>
      <EthInfo accounts={accounts} balance={balance} />
    </div>,
    document.getElementById("root")
  );
})();
