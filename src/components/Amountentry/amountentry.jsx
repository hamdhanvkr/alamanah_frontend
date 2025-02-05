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
                const response = await axios.get(`${apiUrl}/api/amountentry`)
                setAmountentry(response.data)
            }
            catch (error) {
                console.error(error)
            }
        };
        amountentry();
    }, [])

    const handleSave = async () => {
        try{
            const response = await axios.post(`${apiUrl}/amountsave`,{amounts,nodays,fine,total})
            if(response.data)
            {
            alert(response.data.success)  
            
            setAmount('');
            setNodays('');
            setFine('');
            setTotal('');  
            }

            else{
                alert(response.data.failed)
            }
        }
        catch(error){
            console.log(error);
        }
        
    }


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
            <button onClick={handleSave}>Save</button>

        </div>
    )
}

export default Amountentry









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Amountentry = () => {
//     const [amountentry, setAmountentry] = useState([]);
//     const [name, setName] = useState('');
//     const [amounts, setAmount] = useState('');
//     const [nodays, setNodays] = useState('');
//     const [fine, setFine] = useState('');
//     const [total, setTotal] = useState('');
//     const [date, setDate] = useState('');
//     const [fromDate, setFromDate] = useState('');
//     const [toDate, setToDate] = useState('');

//     const apiUrl = import.meta.env.VITE_API_URL;

//     useEffect(() => {
//         fetchAmountEntry();
//     }, []);

//     const fetchAmountEntry = async () => {
//         try {
//             const response = await axios.get(`${apiUrl}/amountentry`);
//             setAmountentry(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleSave = async () => {
//         try {
//             const response = await axios.post(`${apiUrl}/amountsave`, {
//                 name,
//                 amounts,
//                 nodays,
//                 fine,
//                 total,
//                 date,
//             });
//             if (response.data.success) {
//                 alert(response.data.success);
//                 setName('');
//                 setAmount('');
//                 setNodays('');
//                 setFine('');
//                 setTotal('');
//                 setDate('');
//                 fetchAmountEntry();
//             } else {
//                 alert(response.data.failed);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleFilter = async () => {
//         if (!fromDate || !toDate) {
//             alert('Please select both From and To dates');
//             return;
//         }

//         try {
//             const response = await axios.get(`${apiUrl}/amountentry/filter`, {
//                 params: { fromDate, toDate },
//             });
//             setAmountentry(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h3>Amount Entry</h3>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Enter Name"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Enter Amount"
//                     onChange={(e) => setAmount(e.target.value)}
//                     value={amounts}
//                 />
//                 <input
//                     type="number"
//                     placeholder="No. of Days"
//                     onChange={(e) => setNodays(e.target.value)}
//                     value={nodays}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Fine"
//                     onChange={(e) => setFine(e.target.value)}
//                     value={fine}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Total"
//                     onChange={(e) => setTotal(e.target.value)}
//                     value={total}
//                 />
//                 <input
//                     type="date"
//                     onChange={(e) => setDate(e.target.value)}
//                     value={date}
//                 />
//                 <button onClick={handleSave}>Save</button>
//             </div>

//             <div>
//                 <h4>Filter by Date</h4>
//                 <input
//                     type="date"
//                     onChange={(e) => setFromDate(e.target.value)}
//                     value={fromDate}
//                 />
//                 <input
//                     type="date"
//                     onChange={(e) => setToDate(e.target.value)}
//                     value={toDate}
//                 />
//                 <button onClick={handleFilter}>Filter</button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Sno</th>
//                         <th>Name</th>
//                         <th>Amount</th>
//                         <th>No. of Days</th>
//                         <th>Fine</th>
//                         <th>Total</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {amountentry.map((entry, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{entry.name}</td>
//                             <td>{entry.amount}</td>
//                             <td>{entry.noofdays}</td>
//                             <td>{entry.fine}</td>
//                             <td>{entry.total}</td>
//                             <td>{new Date(entry.date).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Amountentry;


