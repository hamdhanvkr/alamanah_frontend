import React, { useEffect, useState } from 'react';
import axios from 'axios';


const member = () => {

  const [memberdetails, setMemberdetails] = useState([])

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const memberdetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/memberdetails`)
        setMemberdetails(response.data)
      }
      catch (error) {
        console.error(error)
      }
    };
    memberdetails();
  }, [])



  return (
    <div>

      <h3>Member Details</h3>

      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Contact No</th>
          </tr>
        </thead>

        <tbody>
          {memberdetails.map((members, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{members.name}</td>
              <td>{members.fathername}</td>
              <td>{members.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default member