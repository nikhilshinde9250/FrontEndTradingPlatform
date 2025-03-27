// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text font-bold py-10">Payment Details</h1>
      {false ? (
        <Card>
          <CardHeader>
            <CardTitle>SBI Bank</CardTitle>
            <CardDescription>A/C NO : ***************252</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <p className="w-32">A/C Holder</p>
              <p className="text-gray-400"> : Code with Niks</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">IFSC</p>
              <p className="text-gray-400"> : SBIN0020154</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Dialog>
          <DialogTrigger>
            <Button className="py-6">Add Payment Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
            </DialogHeader>
            <PaymentDetailsForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PaymentDetails;
