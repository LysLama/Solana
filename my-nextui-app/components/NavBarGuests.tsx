"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import "@/styles/globals.css"
import { usePathname, useRouter } from 'next/navigation'

export default function NavBarGuests () {
  const router = useRouter()
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(-1)
  useEffect(() => {
    switch (pathname) {
      case "/": {
        setNavbar(0)
        break
      }
      case "/guests": {
        setNavbar(1)
        break
      }
      case "/guests/login": {
        setNavbar(2)
        break
      }
      case "/guests/signup": {
        setNavbar(3)
        break
      }
    }
  }, [])
  return (
    <Navbar className='bg-inherit min-w-max cursor-pointer' maxWidth='full'>
      <NavbarBrand>
        <Image src={"/BanhMi.png"} alt="logo" width="64" height="64"/>
        <h1 className='text-2xl mx-1 text-blue50'>DeliAI</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 navbar-content">
        <NavbarItem className={navbar == 0 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={()=>{router.replace("/")}}>
          Home
          </Link>
        </NavbarItem>
        <NavbarItem className={navbar == 1 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.push("/guests")}}>
          Documents
          </Link>
        </NavbarItem>
        <NavbarItem className={navbar == 2 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/guests/login")}}>Login</Link>
        </NavbarItem>
        <NavbarItem className={navbar == 3 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/guests/signup")}}>Sign Up</Link>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}