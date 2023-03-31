import axios from '../../config/axios'
import React, {useEffect, useState} from 'react'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const token = await axios.post('/users/login', {nickName: userName, password: pwd})
        }catch(error){
            console.log(error)
        }    
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <span className="input">
                    <label htmlFor='userName'>Username</label>
                    <input 
                        type="text"
                        required
                        id='userName'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}                    
                    />
                </span>
                <span className="input">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        required
                        id='password'
                        value = {pwd}
                        onChange = {(e) => setPwd(e.target.value)}
                    />    
                </span>
                <button type='submit'>A VER SI TOY</button>
            </form>

        </div>
  )
}

export default Login