import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='p-5 lg:px-20'>
      <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Asset</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>UNIT</TableHead>
              <TableHead>CHANGE</TableHead>
              <TableHead>CHANGE(%)</TableHead>
              <TableHead className="text-right">VALUE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {[1,1,1,1,1].map((item, index)=><TableRow key={index}>
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
            </TableRow>)}
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
  )
}

export default Portfolio
