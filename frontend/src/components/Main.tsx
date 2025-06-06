import "../styles/Main.css";
import toast from "../services/toast";
import { wagmiContractConfig } from "../../wagmi.config";
import {
  useAccount,
  useReadContract,
  useSendTransaction,
  useWriteContract,
} from "wagmi";
import { parseEther } from "viem";
import TransactionForm from "./TransactionForm";
import binanceImg from "/binance.png";
import { use, useEffect } from "react";

export default function Main() {
  const account = useAccount();

  const {
    data: balance,
    isError: errorGetBalance,
    isPending,
    refetch: refetchBalance,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getBalance",
    account: account.address,
  });

  const {
    isSuccess: isSuccessAddFunds,
    error: errorAddFunds,
    sendTransaction,
  } = useSendTransaction();

  const {
    isSuccess: isSuccessWithdraw,
    error: errorWithdraw,
    writeContract,
  } = useWriteContract();

  const handleAddFunds = async (to: `0x${string}`, amount: string) => {
    sendTransaction({ to, value: parseEther(amount) });
  };

  const handleWithdraw = async (to: `0x${string}`, amount: string) => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "withdraw",
      args: [to, parseEther(amount)],
    });
  };

  useEffect(() => {
    if (isSuccessAddFunds) {
      toast.toastSuccess("Funds added successfully");
      refetchBalance();
      console.log("test");
    }
  }, [isSuccessAddFunds, refetchBalance]);

  useEffect(() => {
    if (isSuccessWithdraw) {
      toast.toastSuccess("Funds withdrawn successfully");
      refetchBalance();
      console.log("test");
    }
  }, [isSuccessWithdraw, refetchBalance]);

  useEffect(() => {
    if (errorGetBalance) {
      toast.toastError("Error while getting balance");
      console.error(errorGetBalance);
    }
  }, [errorGetBalance]);

  useEffect(() => {
    if (errorAddFunds) {
      toast.toastError("Error while adding funds");
      console.error(errorAddFunds);
    }
  }, [errorAddFunds]);

  useEffect(() => {
    if (errorWithdraw) {
      toast.toastError("Error while withdrawing funds");
      console.error(errorWithdraw);
    }
  }, [errorWithdraw]);

  return (
    <main>
      <section>
        <div className="icon-container">
          <img src={binanceImg} alt="" />
        </div>
        <h2>
          {isPending || errorGetBalance
            ? 0
            : Number(balance as string) / 10 ** 18}{" "}
          <span className="bnb">BNB</span>
        </h2>
      </section>
      <div className="transaction-forms-container">
        <TransactionForm
          label="Deposit"
          to={wagmiContractConfig.address}
          onSubmit={handleAddFunds}
        />
        <TransactionForm
          label="Withdraw"
          to={account.address}
          onSubmit={handleWithdraw}
        />
      </div>
    </main>
  );
}
