import { useState } from "react"
import { Link } from "react-router"
import CheckBalance from "./CheckBalance"
import Deposit from "./Deposit"




export default function Transaction({onLogout}){

    const handleExit = () => {
        onLogout()
    }

    return(
        <div className="container">
            <div className="btns">   
                <Link to="check-balance">
                    <button className="btn">Check Balance</button>

                </Link>
                <Link to="deposit">
                    <button className="btn">Deposit</button>
                </Link>
                <Link to="withdraw">
                    <button className="btn">Withdraw</button>
                </Link>
                <Link to="view-transaction">
                    <button className="btn">View Transaction</button>
                </Link>
                <button className="btn exit-btn" onClick={handleExit}>Exit</button>
                
            </div>
        </div>
    )

}