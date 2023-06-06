import { BigNumber } from "ethers";

function countDecimals(value: number) {
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
}

export function getCurrencyToTokenRate(
  tokenPrice: number,
  tokenDecimals: number,
  currencyDecimals: number,
  rateDecimals = 30,
) {
  return BigNumber.from("1")
    .mul(
      BigNumber.from(10).pow(tokenDecimals - currencyDecimals + rateDecimals),
    )
    .mul(Math.pow(10, countDecimals(tokenPrice)))
    .div(tokenPrice * Math.pow(10, countDecimals(tokenPrice)));
}
