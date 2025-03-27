// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useNavigate } from 'react-router-dom'

const AssetTable = () => {
  const navigate=useNavigate()
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Coin</TableHead>
        <TableHead>Symbol</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>Market Cap</TableHead>
        <TableHead>24h</TableHead>
        <TableHead className="text-right">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, index)=><TableRow key={index}>
        <TableCell onClick={()=>navigate(`/market/bitcoin`)} className="font-medium flex items-center gap-2">
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
      <TableRow>
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
      </TableRow>
    </TableBody>
  </Table>
  
  )
}

export default AssetTable
