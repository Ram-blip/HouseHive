import './authPage.css'
import Image from '../../components/image/image';
import { useState } from 'react';
import apiRequest from '../../../utils/apiRequest';
import { useNavigate } from 'react-router';
import useAuthStore from '../../../utils/authStore';
 
const authPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const {setCurrentUser} = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try{
            const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`,data);
            setCurrentUser(res.data);
            navigate("/");
        }
        catch(err){
            setError(err.response.data.message);
        }
    }

    return (
        <div className='authPage'>
            <div className='authContainer'>
                <Image path="/general/logo.png" alt="" w={250} h={50}/>
                <h1>{isRegister ? "CREATE AN ACCOUNT" : "LOGIN TO YOUR ACCOUNT"}</h1>
                {isRegister ? 
                // New user Register form
                (<form key="register" onSubmit={handleSubmit}>
                    <div className='formGroup'>
                        <label htmlFor="username">Username</label>
                        <input type="username" placeholder="username" id="username" required name='username'  />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="displayName">DisplayName</label>
                        <input type="displayName" placeholder="Name" id="displayName" required name='displayName'  />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" id="email" required name='email'  />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required name='password'  />
                    </div>
                    <button type='submit'>
                        Register
                    </button>
                    <p onClick={() => setIsRegister(false)}>
                        Do you have an account? <b>Login</b>
                    </p>
                    {error && <p className='error'>{error}</p>}
                </form>) 
                // Main login form 
                : (
                    <form key="Loginform" onSubmit={handleSubmit}>
                    <div className='formGroup'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" id="email" required name='email'  />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" required name='password'  />
                    </div>
                    <button type='submit'>
                        Login
                    </button>
                    <p onClick={() => setIsRegister(true)}>
                        Dont have an account? <b>Register</b>
                    </p>
                    {error && <p className='error'>{error}</p>}
                </form>
                    
                )}
            </div>
        </div>
    )
}

export default authPage;  