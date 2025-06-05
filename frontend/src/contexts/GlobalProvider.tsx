import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../../wagmi.config";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const customTheme = lightTheme({
  accentColor: "#f2bd35",
});

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ToastContainer />
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={customTheme}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
