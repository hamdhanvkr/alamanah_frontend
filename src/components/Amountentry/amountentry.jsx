import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Amountentry = () => {

    const [amountentry, setAmountentry] = useState([])
    const [amounts,setAmount] = useState('');
    const [nodays,setNodays] = useState('');
    const [fine,setFine] = useState('');
    const [total,setTotal] = useState('');


    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const amountentry = async () => {
            try {
                const response = await axios.get(`${apiUrl}/amountentry`)
                setAmountentry(response.data)
            }
            catch (error) {
                console.error(error)
            }
        };
        amountentry();
    }, [])


    return (
        <div>
            <h3>Amount Entry</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>No.of Days</th>
                        <th>Fine</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {amountentry.map((amount,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{amount.name}</td>
                        <div>
                        <input type='text' className='textboxs' placeholder='Enter Amount' 
                        onChange={(e)=>setAmount(e.target.value)}
                        value={amounts}

                        />
                        <input type='text' className='textboxs' placeholder='No.of Days' 
                        onChange={(e)=>setNodays(e.target.value)}
                        value={nodays}
                        
                        />
                        <input type='text' className='textboxs' placeholder='Fine'
                        onChange={(e)=>setFine(e.target.value)}
                        value={fine} 
                        
                        />
                        <input type='text' className='textboxs' placeholder='Total'
                        onChange={(e)=>setTotal(e.target.value)}
                        value={total}
                        />
                        </div>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Amountentry