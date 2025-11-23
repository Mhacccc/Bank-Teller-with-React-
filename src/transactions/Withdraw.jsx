import { useState } from "react"
import { useNavigate } from "react-router";
import Back from "../components/Back";



export default function Withdraw({balance,setBalance}){

    const navigate = useNavigate();

    const [amount,setAmount] = useState("");
    const [isInvalid,setIsInvalid] = useState(false);

    const handleChange = (e) => {
        setAmount(Number(e.target.value))
    }

    const handleClick = () => {
        if(Number(amount)>balance||amount<=0){
            setIsInvalid(true);
            return;
        }

        setIsInvalid(false);
        setBalance(prev=>prev-amount);
        navigate("/");
    }



    return (
        <div className="balance">
            <input type="number" value={amount} onChange={handleChange} />
            <button onClick={handleClick}>Enter</button>
            <Back />
            {isInvalid&&(<h1 style={{ color: 'red' }}>Invalid Input!</h1>)}
        </div>
    )
}