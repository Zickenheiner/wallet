import "../styles/TransactionForm.css";
import { useRef } from "react";
import toast from "../services/toast";

type TransactionFormProps = {
  label: string;
  to?: `0x${string}`;
  onSubmit: (to: `0x${string}`, amount: string) => void;
};

export default function TransactionForm({
  label,
  to,
  onSubmit,
}: TransactionFormProps) {
  const amountRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const amount = amountRef.current?.value || "";
    if (!amount || isNaN(+amount) || +amount <= 0) {
      toast.toastError("Please enter a valid amount");
      return;
    }
    onSubmit(to || "0x", amount);
    amountRef.current!.value = "";
  };

  return (
    <div className="transaction-form-container">
      <input
        type="number"
        ref={amountRef}
        placeholder="Amount in ETH"
        required
      />
      <button type="button" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
}
