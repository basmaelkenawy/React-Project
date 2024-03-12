import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function Login(){
    const [email , setEmail] = useState()
    const [password , setPasword] = useState()
    const navigate = useNavigate()

    const handleSubmmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            } else {
                alert("User does not exist. Please sign up first.");
            }
        })
        // .catch(err => console.log(err))
        .catch(err => {
            console.log(err);
            
        })
    }

    return(
        <div className='d-flex justify-content-center align-items-center vh-100  bg-white' >
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form onSubmit={handleSubmmit}>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        id='email'
                        className='form-control rounded-0' 
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        placeholder='Enter Password'
                        autoComplete='off'
                        name='password'
                        id='password'
                        className='form-control rounded-0' 
                        onChange={(e) => setPasword(e.target.value)}

                    />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0 '>
                    Login
                </button>
                </form>
                <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-3'>
                    Sign Up
                </Link>

        </div>
        <div>
            <img src="../src/login.jpg " height={400}  alt="" />
        </div>
    </div>
    )

}

export default Login 