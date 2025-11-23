


export default function ViewTransaction({transaction}){

    
    return (
        <div className="transaction">
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((e,index)=>{
                        return (
                            <tr key={index}> 
                                <td>{e.dateTime}</td> 
                                <td>{e.type}</td> 
                                <td>{e.amount}</td> 
                            </tr>
                        )
                    })}
                </tbody>

           
            </table>
        </div>
    )
}