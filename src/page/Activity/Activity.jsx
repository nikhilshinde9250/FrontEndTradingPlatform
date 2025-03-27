import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Activity = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-6">Date & Time</TableHead>
            <TableHead>Trading pair</TableHead>
            <TableHead>BUY Price</TableHead>
            <TableHead>SELLING Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="">Profit/Loss</TableHead>
            <TableHead className="text-right">VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2025/01/25</p>
                <p className="text-gray-400">16:42:01</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>109938490977</TableCell>
              <TableCell>2033658273725</TableCell>
              <TableCell>BUY</TableCell>
              <TableCell>$102648</TableCell>
              <TableCell className="text-right">5467</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
                      <TableCell className="font-medium flex items-center gap-2">
                          <Avatar className="-z-50">
                              <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"/>
                          </Avatar>
                          <span>Bitcoin</span>
                      </TableCell>
                      <TableCell>BTC</TableCell>
                      <TableCell>109938490977</TableCell>
                      <TableCell>2033658273725</TableCell>
                      <TableCell>-5.05383</TableCell> 
                      <TableCell className="text-right">$102648</TableCell>
                    </TableRow> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
