export default function setTransact(amount,type,transaction,setTransaction){

    let now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();
    let fullTimeString = now.toLocaleTimeString()

    setTransaction([...transaction,{
            dateTime:`${month}/${date}/${year} `+fullTimeString,
            type: type,
            amount: amount
    }])
}