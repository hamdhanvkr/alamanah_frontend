import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import DonateLogo from '../../assets/donatelogo.png';
import './login.css';

function Login() {

    const apiUrl = import.meta.env.VITE_API_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${apiUrl}/login`, {
                username: username,
                password: password,
            });

            if (response.data.success) {
                navigate(`/alamanah/${username}/dashboard`);
            }
            else {
                alert(response.data.message);
                console.error(error);
            }
        }
        catch (error) {
            alert('An error occurred. Please try again later.');
            console.error(error)
        }
    }

    return (

        <div className='main'>
            <div className='left'>
                <h2 className='title1'>AL Amanah <span className='title2'>Trust</span> </h2>
                <div className='donatelogo-div'>
                    <img src={DonateLogo} alt='' className='donate' />
                </div>
            </div>
            <div className='right'>
                <h2>Welcome !</h2>
                <div className='textbox1'>
                    <div className='icon-div'>
                        <FontAwesomeIcon icon={faLock} className='icons' />
                    </div>
                    <input type='text'
                        className='textbox'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='textbox1'>
                    <div className='icon-div'>
                        <FontAwesomeIcon icon={faKey} className='icons' />
                    </div>
                    <input type='password'
                        className='textbox'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='login-btn' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login