import { ethers } from "ethers";
import moment from "moment";

export const formatCurrency = (n: any, maxLengthOfDecimal = 2) => {
  if (Number.isNaN(n)) return "0";

  const newNumber = Number(n);
  const lengthOfDecimal = Math.floor(newNumber) !== newNumber ? maxLengthOfDecimal : 0;

  const re = `\\d(?=(\\d{3})+${lengthOfDecimal ? "\\." : "$"})`;
  return newNumber.toFixed(Math.max(0, ~~lengthOfDecimal)).replace(new RegExp(re, "g"), "$&,");
};

export async function checkMetaMaskIsUnlocked() {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  try {
    const accounts = await provider.listAccounts();
    return accounts.length > 0;
  } catch (e) {
    return false;
  }
}

export const displayWalletAddress = (address: string | undefined, digits = 6) => {
  if (!address) return "N/A";
  return `${address.substring(0, digits)}...${address.substring(
    address.length - 3,
    address.length,
  )}`;
};

export const displayDateTime = (unix: string | undefined) => {
  return unix ? moment.unix(+unix).format("YYYY-MM-DD HH:mm:ss") : "TBA";
};
