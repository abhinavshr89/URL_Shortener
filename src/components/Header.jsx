import React from 'react'
import logo from "../../public/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react';
import { LinkIcon } from 'lucide-react';
const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <div className='py-4 flex justify-between items-center'>
      <Link to="/" >
        <img src={logo} alt="Trimmr logo" className='h-16' />
      </Link>

      <div>
        {
          user ?
            <Button onClick={() => navigate("/auth")}  >Login</Button>
            :
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Abhinav Shrivastav</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LinkIcon className='mr-2 h-4 w-4 '/>
                  <span>My Links</span> 
                 </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className='mr-2 h-4 w-4'/>
                  
                   <span>Logout</span></DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>

        }

      </div>
    </div>


  )
}

export default Header