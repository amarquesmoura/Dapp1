export const SET_ETH_INFO = "setEthInfo";

export const initialState = {
  balance: 100,
  accounts: ["My Wallet"]
};


export default function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case SET_ETH_INFO:
      return {
        ...state,
        ...action.payload
      };
    default:
      return initialState;
  }
}
