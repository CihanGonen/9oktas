import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

import FormInput from "../FormInput/FormInput"
import CustomButton from '../CustomButton/CustomButton';

import './SignupRight.css';

export default function SigninSignupRight() {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [secondPassword,setSecondPassword]=useState('');
  const [passwordError,setPasswordError] = useState(null);

  const { signup, error, isPending } = useSignup();

  const handleChange = e => {
    const {value,name} = e.target;
    switch(name){
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'secondPassword':
        setSecondPassword(value)
        break;
      case 'username':
        setUsername(value)
        break;
      default:
        break;
    }
  }
  
  const handleSubmit =(e) => {
    e.preventDefault();

    if(password!==secondPassword){
      setPasswordError('Lütfen girilen şifrelerin aynı olmasına dikkat ediniz.');
      return
    }

    setPasswordError(null);

    signup(email,password,username);
    setEmail('');
    setUsername('');
    setPassword('');
    setSecondPassword('');
  }

  return (
    <div className="sign-up-wrapper">
    <div className="sign-up-sub-wrapper">
      <h2 className="title">Kayıt Ol</h2>
      <div className="cizgi" style={{background:'#00a2ff',width:'21%'}}></div>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput 
          name="username"
          value={username}
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
        <FormInput 
          name="secondPassword"
          type="password"
          value={secondPassword}
          handleChange={handleChange}
          label="Şifre tekrarı"
          required
        />
        {passwordError && <p>{passwordError}</p>}
        {isPending ?
          <CustomButton disabled type='submit'>yükleniyor...</CustomButton>
        :
          <CustomButton type='submit'>KAYIT OL</CustomButton>
        }
        
        {error && <p>{error}</p>}
      </form>
    </div>
    </div>
  )
}
