import React, { Component } from "react";

const EthInfo = ({ accounts, balance }) => {
  return (
    <div>
      <h1>My Eth Info</h1>
      <p>Account: {accounts[0]}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default EthInfo;
