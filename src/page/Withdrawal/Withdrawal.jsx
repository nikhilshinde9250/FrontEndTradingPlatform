// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Withdrawal = () => {
  return (
     <div className="p-5 lg:px-20">
         <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
         <Table className="border">
           <TableHeader>
             <TableRow>
               <TableHead className="py-6">Date</TableHead>
               <TableHead>Method</TableHead>
               <TableHead>Amount</TableHead>
               <TableHead className="text-right">Status</TableHead>
               {/* <TableHead className="">Profit/Loss</TableHead> */}
               {/* <TableHead className="text-right">VALUE</TableHead> */}
             </TableRow>
           </TableHeader>
           <TableBody>
             {[1, 1].map((item, index) => (
               <TableRow key={index}>
                 <TableCell>
                   <p>July 27, 2024 at 11:43</p>
                 </TableCell>
                 <TableCell>
                   <span>Bank Account</span>
                 </TableCell>
                 <TableCell>$120</TableCell>
                 {/* <TableCell>2033658273725</TableCell> */}
                 <TableCell className="text-right">BUY</TableCell>
               </TableRow>
             ))}
            
           </TableBody>
         </Table>
       </div>
  )
}

export default Withdrawal
