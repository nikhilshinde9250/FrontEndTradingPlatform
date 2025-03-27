import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { BookmarkIcon, DashboardIcon, ExitIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import path from "path";
import React from "react";
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-8 w-8" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-8 w-8"/>
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-8 w-8"/>
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <DashboardIcon className="h-8 w-8"/>
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <WalletIcon className="h-8 w-8"/>
  },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-8 w-8"/>
  },
  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-8 w-8"/>
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-8 w-8"/>
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <ExitIcon className="h-8 w-8"/>
  }

];

const Sidebar = () => {
  const navigate=useNavigate();
  
  return (
    <div className="mt-10 space-y-5">
        {menu.map((item)=>(  
      <div key={item.name}>
        <SheetClose className="w-full">
          <Button
            variant="outline"
            className="flex items-center gap-5 py-6 w-full"
            onClick={() => navigate(item.path)}
            >
            <span className="w-8 ">
              {item.icon}
            </span>
            <p>{item.name}</p>
          </Button>
        </SheetClose>
      </div>
      ))}
    </div>
  );
};

export default Sidebar;
