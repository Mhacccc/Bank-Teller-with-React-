import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import Back from "../components/Back";
import Transaction from "./Transaction";
import setTransact from "../utils/setTransact";



export default function Withdraw({balance,setBalance,transaction,setTransaction}){

    const navigate = useNavigate();

    const [amount,setAmount] = useState("");
    const [isInvalid,setIsInvalid] = useState(false);

    const handleChange = (e) => {
        setAmount(Number(e.target.value))
    }

    const handleClick = () => {
        if(amount>balance||amount<=0){
            setIsInvalid(true);
            return;
        }

        setTransact(amount,"Withdraw",transaction,setTransaction)
        setIsInvalid(false);
        setBalance(prev=>prev-amount);
        navigate("/");
    }

    useEffect(()=>{
        console.log(transaction)
    },[transaction])

    return (
        <div className="balance">
            <input type="number" value={amount} onChange={handleChange} />
            <button onClick={handleClick}>Enter</button>
            <Back />
            {isInvalid&&(<h1 style={{ color: 'red' }}>Invalid Input!</h1>)}
        </div>
    )
}