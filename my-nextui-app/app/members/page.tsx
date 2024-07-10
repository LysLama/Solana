"use client"

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect, useState } from "react";
import "@/styles/globals.css"
export default function Home() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState<number>(0);
 
    useEffect(() => {
    if (publicKey) {
        (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
        })();
    }
    }, [publicKey, connection, balance]);


    return (
        <div className="absolute content-box">
            <div className="content-background"/>
            <div className="info">
                { publicKey ?
                <>
                    <h1>Your Public key is: {publicKey?.toString()}</h1>
                    <h1>Your Balance is: {balance} SOL</h1>
                </> :
                <>
                </>
                }
                <WalletMultiButton style={{}} />
            </div>
        </div>
    )
}