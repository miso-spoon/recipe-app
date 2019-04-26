export const ACCOUNT_ACTION = "AccountAction";
export const ALL_ACCOUNTS_ACTION = "AllAccountsAction";

export function updateAccount(account) {
  return {
    type: ACCOUNT_ACTION,
    payload: account
  };
}

export function updateAccounts(accounts) {
  return {
    type: ALL_ACCOUNTS_ACTION,
    payload: accounts
  };
}
