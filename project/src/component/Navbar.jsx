import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

    <header className="p-4 mb-2 bg-success-subtle d-flex justify-content-center align-items-center gap-3">
        <Link to="/login" className='link-offset-2 link-underline link-underline-opacity-0  btn btn-outline-success fs-3 fw-medium border-3 px-5' >LogIn</Link>
        <Link to="/register" className='link-offset-2 link-underline link-underline-opacity-0 btn btn-outline-success fs-3 fw-medium border-3 px-5'>SignUp</Link>
    </header>
    )
}
