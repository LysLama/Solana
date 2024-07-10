"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import "@/styles/globals.css"

export default function NavBarMembers () {
  const router = useRouter()
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(-1)
  useEffect(() => {
    switch (pathname) {
      case "/members": {
        setNavbar(0)
        break
      }
      case "/members/datasets": {
        setNavbar(1)
        break
      }
      case "/members/competition": {
        setNavbar(2)
        break
      }
    } 
  })

  return (
    <Navbar className='bg-inherit min-w-max cursor-pointer' maxWidth='full'>
      <NavbarBrand className='navbar-start'>
        <Image src={"/BanhMi.png"} alt="logo" width="64" height="64"/>
        <h1 className='text-2xl mx-1 text-blue50'>DeliAI</h1>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 navbar-content-members">
        <NavbarItem className={navbar == 0 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/members")}}>
          Home
          </Link>
        </NavbarItem>
        <NavbarItem className={navbar == 1 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/members/datasets")}}>
          Datasets
          </Link>
        </NavbarItem>
        <NavbarItem className={navbar == 2 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/members/notebooks")}}>
          Notebooks
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='navbar-content-end'>
        <NavbarItem className={navbar == 3 ? "active" : "non-active"}>
          <Link className='text-2xl mx-1 text-blue50' onClick={() => {router.replace("/")}}>Log Out</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}