import React, {useState} from 'react'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'

function LoginPage(props){
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const onEmailHander = (e) => {
    setEmail(e.currentTarget.value);
  }
  const onPasswordHander = (e) => {
    setPassword(e.currentTarget.value);
  }
  const onSubmitHanger = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
      if(response.payload.loginSuccess){
        props.history.push('/')
      }else {
        alert("error")
      }
    })
  }

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <form style={{ display: 'flex', flexDirection:"column" }}
            onSubmit={onSubmitHanger}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHander}/>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHander}/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage