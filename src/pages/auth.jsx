import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from '@/components/login'
import Signup from '@/components/signup'
const Auth = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("createNew"))
  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold '>
        {searchParams.get("createNew") ? "Hold up! let's login first.." : "Login / Signup"}
      </h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><Login/></TabsContent>
        <TabsContent value="password"><Signup/></TabsContent>
      </Tabs>

    </div>
  )
}

export default Auth;