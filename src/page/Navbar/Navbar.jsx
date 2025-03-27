import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <div className="px-4 py-4 h-16 border-b z-50 bg-background sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <DragHandleHorizontalIcon className="h-8 w-8" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className='text-3xl flex justify-center items-center gap-1 '>
                  <Avatar>
                    <AvatarImage className='rounded-full' src="https://cdn.pixabay.com/photo/2021/06/22/12/02/money-6356016_640.jpg"/>
                  </Avatar>
                  <div>
                    <span className='font-bold text-orange-600'>Trade</span>
                    <span>Market</span>
                  </div>
                </div>

              </SheetTitle>
            </SheetHeader>
            <Sidebar/>
          </SheetContent>
        </Sheet>
        <p className='text-sm lg:text-base cursor-pointer'>
          Royal Trading
        </p>
        <div className='p-0 ml-9 '>
        <Button variant="outline"
         className="flex items-center gap-3" >
          <MagnifyingGlassIcon/>
          <span>Search</span>
        </Button>

        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
             N
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
