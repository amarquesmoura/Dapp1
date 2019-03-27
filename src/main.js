import React from "react";
import { render } from "react-dom";
import EthInfoContextProvider from "./state/context";
import EthInfo from "./Components/EthInfo";

import getWeb3 from "./utils/getWeb3";

(async function() {
  const web3 = await getWeb3();
  render(
    <EthInfoContextProvider web3={web3}>
      <EthInfo />
    </EthInfoContextProvider>,
    document.getElementById("root")
  );
})();
