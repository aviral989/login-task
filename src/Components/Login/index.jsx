
import React, {useState} from 'react';
import FormInputField from '../utility/FormInputField';
import { useRouter } from 'next/router';

function LoginForm({

}) {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

    /**
   *
   * @param email
   * @return {boolean}
   */
    const validateEmail = (email) => {
      if (/^[+\w]+([\.-]?[+\w]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    }

    const onLogin = async () =>{
      setFormSubmitted(true)
      if(email && password){
        localStorage.setItem('auth', 'true');
        router.push('/')

      }
    }

  return (
    <div className='login__container'>
        <div className="login__box">
            <div className="login__heading"> Login </div>
            <div className="login__sub-heading"> Welcome back to ECOMMERCE </div>
            <div className="login__sub-sub-heading"> The next gen bussiness marketplace </div>
            <div className="login__form">
            <FormInputField 
            value={email}
             onChange={(e)=> setEmail(e.target.value)} 
             label={"Email"} 
             name={'email'}
             placeholder={"Enter"}
             showError={formSubmitted && !validateEmail(email)}

              />
            <FormInputField name="password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" label={"Password"} placeholder={"Enter"}
            
            showError={formSubmitted && !password}

            />
            <button onClick={()=> onLogin()} className='login__form__submit-btn' > Login </button>
            <hr />
            </div>
            <div className='login__footer' > 
            Don't have an Account 
            <b onClick={()=>{
                      router.push('/signup')
            }}>SIGN UP</b>
            </div>

        </div>

    </div>
  );
}



export default (LoginForm);
