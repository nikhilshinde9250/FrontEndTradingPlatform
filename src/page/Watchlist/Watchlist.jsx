import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Watchlist = () => {
const handleRemoveToWatchlist=(value)=>{
  console.log(value)
}

  return (
    <div className='p-5 lg:px-20'>
          <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
           <Table className='border'>
              <TableHeader>
                <TableRow>
                  <TableHead className="py-6">Coin</TableHead>
                  <TableHead>SYMBOL</TableHead>
                  <TableHead>VOLUME</TableHead>
                  <TableHead>MARKET CAP</TableHead>
                  <TableHead>24H</TableHead>
                  <TableHead className="">PRICE</TableHead>
                  <TableHead className="text-right text-red-600">REMOVE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  {[1,1,1,1,1,1].map((item, index)=><TableRow key={index}>
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
                  <TableCell>$102648</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" onClick={()=> handleRemoveToWatchlist(item.id)} size="icon" className='h-10 w-10'>
                      <BookmarkFilledIcon className='w-9 h-9'/>
                    </Button>
                  </TableCell>
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

export default Watchlist
