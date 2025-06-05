import { http, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import contract from "./src/artifacts/contracts/Wallet.sol/Wallet.json";

export const wagmiConfig = createConfig({
  chains: [bsc],
  transports: {
    [bsc.id]: http(),
  },
});

export const wagmiContractConfig = {
  address: "0x366Fa01311E2d444D92240226f97Ee0BeFd98462",
  abi: contract.abi,
} as const;
