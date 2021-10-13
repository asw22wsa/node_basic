import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_action'
import { withRouter } from 'react-router-dom'

function RegisterPage(props){
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHander = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onNameHander = (e) => {
    setName(e.currentTarget.value);
  }

  const onPasswordHander = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onConfirmPasswordHander = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  const onSubmitHanger = (e) => {
    e.preventDefault();

    if(Password !== ConfirmPassword){
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      name:Name,
      password: Password
    }

    dispatch(registerUser(body))
    .then(response => {
      if(response.payload.success){
        props.history.push('/login');
      }else{
        alert("fail register");
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

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHander}/>

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHander}/>

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHander}/>
        <br/>
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default withRouter(RegisterPage)