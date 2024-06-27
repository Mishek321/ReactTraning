import React from 'react'
import '../form/Form.css'

export default function Form({formType}) {
  return (
    <>
        <form>
          <div className='register' >
            < h3>{formType === "login" ? "Login" : "Register"}</h3>
            <input type="text" placeholder='User Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Password'/>
            {formType === 'register' &&(
            <input type="text" placeholder='Confirm Password'/>
            )}
            <button>{formType === 'login' ? 'Login' : 'Register'}</button>
            </div>
        </form>
    </>
  )
}
