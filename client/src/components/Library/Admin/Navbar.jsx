import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 w-full">
      <div className="w-full">
        <header className="flex w-full items-center h-16 px-4 border-b shrink-0 md:px-6">
          <nav className="flex items-center gap-5 text-sm font-medium md:gap-6 lg:gap-8">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              prefetch={false}
            >
              <BookOpen className="w-6 h-6" />
              <span className="sr-only">Library</span>
            </Link>
            <Link href="#" className="font-bold" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Books
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Loans
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Users
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Settings
            </Link>
          </nav>
          <div className="flex items-center w-full gap-4 ml-auto md:gap-2 lg:gap-4">
            <form className="flex-1 ml-auto sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[336px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <img
                    src="/placeholder.svg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
