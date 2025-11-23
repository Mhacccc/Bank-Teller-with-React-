import { useEffect, useState } from "react"
import Transaction from "./Transaction"
import Back from "../components/Back"
import { useNavigate } from "react-router"


const now = new Date();

const fullTimeString = now.toLocaleTimeString()



export default function Deposit({balance,setBalance,transaction,setTransaction}){
    
    const navigate = useNavigate();

    const [amount,setAmount] = useState("")
    const [isInvalid,setIsInvalid] = useState(false)
    
    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleClick = () => {
        if(Number(amount)<=0){
            setIsInvalid(true)
            console.log(isInvalid)
            return;
        }

        setTransaction([...transaction,{
            dateTime:fullTimeString 
        }])
        setBalance(prev=>prev+Number(amount))
        setIsInvalid(false)
        
        navigate("/")


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