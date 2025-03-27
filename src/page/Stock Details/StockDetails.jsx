// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  BookmarkFilledIcon,
  BookmarkIcon,
  DotIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TreadingForm from "./TreadingForm";
import StockChart from "../Home/StockChart";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between ">
        <div className="flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage
                src={
                  " https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                }
              />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-xl font-bold">$6465</p>
              <p className="text-red-600">
                <span>--1319049822.578</span>
                <span>(-0.29803%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <Button>
            {false ? (
              <BookmarkFilledIcon className="h-6 w-8" />
            ) : (
              <BookmarkIcon className="h-6 w-8" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Tread</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much Do you want to spend?</DialogTitle>
              </DialogHeader>
              <TreadingForm/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-20">
      <StockChart/>
      </div>
    </div>
  );
};

export default StockDetails;
