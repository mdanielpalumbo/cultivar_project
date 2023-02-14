import React, {useState, useEffect} from 'react'

const USER_REGEX = /^[a-zA-Z][a-zAZ0-9-_]{3,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;

const CreateUser = () => {
  const [userName, setUserName] = useState('')
  const [validUser, setValidUser] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)

  const[email, setEmail] = useState('')

  const [match, setMatch] = useState('')
  const [validMatch, setValidMatch ] = (false)



  useEffect(() => {
    setValidUser(USER_REGEX.test(userName))
    console.log(userName)
  }, [userName])

  useEffect(() => {
    console.log(pwd, match)
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === match)
  },[pwd, match])


  return (
    <div className='app'>
      <h2>Register</h2>
      <form>
        <span className="input">
          <label htmlFor='userName'>Username</label>
          <input type="text"
            id='userName'
            required
            aria-invalid={validUser ? 'false' : 'true'}
            onChange={(e) => {setUserName(e.target.value)}}
            value={userName}
          />
        </span>
        <span className="input">  
          <label>Email</label>
          <input type="email" 
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </span>
        <span className="input">
          <label>Password</label>
          <input type="password" 
            onChange={(e) => setPwd(e.target.value)}
          />
        </span>
        <span className="input">
          <label>Confirm password</label>
          <input type="password" 
            onChange={(e) => {setMatch(e.target.value)}}
          />
        </span>
        <button type='submit'>register</button>
      </form>    
    </div>
  )
}

export default CreateUser