// eslint-disable-next-line no-unused-vars
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("");
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = () => {
    console.log(amount);
    };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4 ">
        <p>Available Balance</p>
        <p>$8900</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput px-0 text-2xl text-center py-7 border-none outline-none focus:outline-none"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="pb-2"> Transfer To</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-10 w-10"
            src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png"
            alt=""
          />
          <div>
            <p className="text-xl font-bold">SBI bank</p>
            <p className="text-xs">************252</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
      <Button 
      onClick={handleSubmit}
      className="w-full py-7 text-xl">
        Withdrawal
      </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
