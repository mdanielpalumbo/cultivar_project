import React from 'react'

const CreateUser = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('jodete')
  }
  return (
    <div className='app'>
      <h2>Register</h2>
      <form action="" onSubmit={handleSubmit}>
        <span className="input">
          <label>Username</label>
          <input type="text" />
        </span>
        <span className="input">  
          <label>Email</label>
          <input type="email" />
        </span>
        <span className="input">
          <label>Password</label>
          <input type="password" />
        </span>
        <button type='submit'>register</button>
      </form>
        
      
        
    </div>
  )
}

export default CreateUser