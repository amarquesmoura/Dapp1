import React, { createContext, useReducer, useMemo } from "react";
import reducer, { initialState, SET_ETH_INFO } from "./reducer";

export const EthInfoContext = createContext();

export default ({ children, web3 }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getEthInfo(web3) {
    const accounts = await web3.eth.getAccounts();
    let balance = await web3.eth.getBalance(accounts[0]);
    balance = web3.utils.fromWei(balance, "ether");
    return { accounts, balance };
  }

  getEthInfo(web3).then(({ accounts, balance }) =>
    dispatch({
      type: SET_ETH_INFO,
      payload: { accounts, balance }
    })
  );

  return (
    <EthInfoContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </EthInfoContext.Provider>
  );
};
