import Back from "../components/Back";



export default function CheckBalance({balance}){

    
    return (
        <div className="balance">
            Your Balance: {balance}
            <Back />
        </div>
    )
}