import React from 'react'
import "./Login.css"
const Login = () => {

    const handleChange=()=>{}
    const handleSubmit=()=>{}

  return (
        <section>
            <div className='formContainer'>

                <form className='form' onSubmit={handleSubmit}>

                    <div>
                        <h1>Login Admin</h1>
                    </div>

                    <div>
                        <input type="email" onChange={handleChange} className='formInput' placeholder='Enter your email'/>
                    </div>

                    <div>
                        <input type="password" onChange={handleChange} className='formInput' placeholder='Enter your password'/>
                    </div>

                    <div>
                        <input type="submit" value="Login" className='formBtn'/>
                    </div>

                </form>

            </div>
        </section>
  )
}

export default Login