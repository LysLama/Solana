"use client"

import React from "react"
import Image from "next/image"
import "@/styles/globals.css"
import { Button } from "@nextui-org/button"

export default function Card() {
    let random = Math.ceil(Math.random() * 25).toString()
    return (
        <div className="card">
            <div className="image-card">
                <Image src={`/explore-sample/sample${random}.png`} alt={""} width={240} height={100} className="rounded-md"/>
            </div>
            <div className="text-card">
                Nguyen Thanh Hai datasets
            </div>
            <Button>
                Download
            </Button>
        </div>
    )
}