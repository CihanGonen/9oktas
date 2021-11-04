import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin'

import FormInput from "../FormInput/FormInput"
import CustomButton from '../CustomButton/CustomButton';

import './SigninRight.css';

export default function SigninSignupRight() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const { login, isPending, error } = useLogin();

  const handleChange = e => {
    const {value,name} = e.target;
    switch(name){
      case 'password':
        setPassword(value)
        break;
      case 'username':
        setEmail(value)
        break;
      default:
        break;
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    login(email,password);

    setEmail('');
    setPassword('');
  }

  return (
    <div className="sign-in-wrapper">
    <div className="sign-in-sub-wrapper">
      <h2 className="title">Giriş Yap</h2>
      <div className="cizgi" style={{background:'#00a2ff',width:'21%'}}></div>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="username"
          value={email}
          handleChange={handleChange}
          label="Kullanıcı Adı"
          required
        />
        <FormInput 
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Şifre"
          required
        />
        {isPending ?
          <CustomButton disabled type='submit'>yükleniyor...</CustomButton>
        :
          <CustomButton type='submit'>GİRİŞ YAP</CustomButton>
        }
        {error && <p>{error}</p>}
      </form>
      <a href="/signup" className="forgotPassword">
        Şifremi unuttum
      </a>
    </div>
    </div>
  )
}
