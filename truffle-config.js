module.exports = {
  contracts_directory: "./src/Contracts",
  networks: {
    local: {
      host: "localhost",
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: "*"
    }
  }
};
