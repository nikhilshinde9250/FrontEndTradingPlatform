import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// eslint-disable-next-line no-unused-vars
import React from "react";

const TransferForm = () => {
  const [formData, setFormData] = React.useState({
    amount: "",
    walletId: "",
    purpose: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="">
        <h1 className="pb-1">Enter amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          placeholder="$9999"
        />
      </div>
      <div className="">
        <h1 className="pb-1">Wallet Id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="#RFCW455"
        />
      </div>
      <div className="">
        <h1 className="pb-1">Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="Enter purpose"
        />
      </div>
      <DialogClose>
      <Button onClick={handleSubmit} className="w-full text-xl py-7">
        Submit
      </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
