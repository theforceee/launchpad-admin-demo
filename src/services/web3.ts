import { ethers } from "ethers";

export const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return ethereum?.isMetaMask;
};

export const convertFromWei = (value: any, unit = "ether") => {
  return ethers.utils.formatUnits(value, unit);
};

export const convertToWei = (value: any, unit = "ether") => {
  return ethers.utils.parseUnits(value, unit);
};

export const isValidAddress = (address: string) => {
  return ethers.utils.isAddress(address);
};

export const getETHBalance = async (loginUser: string) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  try {
    const balance = await provider.getBalance(loginUser);

    // Convert the balance to ETH
    const ethBalance = ethers.utils.formatEther(balance);

    return ethBalance;
  } catch (error) {
    return 0;
  }
};
