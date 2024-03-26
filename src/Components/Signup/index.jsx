
import React, {useState, useRef, useEffect} from 'react';
import FormInputField from '../utility/FormInputField';
import OtpInput from 'react-otp-input';
import { useRouter } from 'next/router';

function Signup({

}) {
  
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [otpInput, setOtpInput] = useState('')
  const [page, setPage] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  const onLogin = async () =>{
    setFormSubmitted(true)
    if(page ===2){    
      if(otpInput === '12345678'){
        localStorage.setItem('auth', 'true');
        router.push('/')
      }
    }
    else{
      if(email && password && name){
     
        setPage(2)
        setFormSubmitted(false)

      }
    }

  }
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

  return (
    <div className='signup__container'>
        <div className="signup__box">
            <div className="signup__heading"> {page === 1 ? 'Create your account' : 'Verify your email'} </div>
            {page === 2 &&  <div className="signup__sub-sub-heading"> Enter the 8 digit code you have received on anu***@gmail.com </div>}

            <div className="signup__form">
            {page === 1 && 
            <FormInputField 
            value={name}
             onChange={(e)=> setName(e.target.value)} 
             label={"Name"} 
             placeholder={"Enter"}
             name={"name"}
             showError={formSubmitted && !name}

              />}
            {page === 1 &&<FormInputField 
            value={email}
             onChange={(e)=> setEmail(e.target.value)} 
             label={"Email"} 
             placeholder={"Enter"}
             name={"email"}
             showError={formSubmitted && !validateEmail(email)}
              />}
           {page === 1 && <FormInputField value={password} onChange={(e)=> setPassword(e.target.value)} type="password" label={"Password"} 
           name={"password"}
           showError={formSubmitted && !password}
           placeholder={"Enter"} />}
           <div style={{ marginBottom:'5px' }} className={ 'default-label'}>
      
      {' '}
    </div>
    {page === 2 && 
    <>    {'Code'}
    <OtpInput
      value={otpInput}
      onChange={setOtpInput}
      numInputs={8}
      shouldAutoFocus
      containerStyle={{
        marginBottom:'30px'
      }}
      inputType="number"
      inputStyle={{
        border: "1px solid #C1C1C1",
        borderRadius:'6px',
        marginRight:'5px',
        width:'10%',
        height:'48px'
      }}
      className='input-placeholder'
      renderSeparator={<span className='input-placeholder'>  </span>}
      renderInput={(props) => <input className='input-placeholder' {...props} />}
    /> 
    {console.log("otpInput",otpInput)}
        {(formSubmitted && !String.length(otpInput) )  && (
              <div className="input-error">
                *Please enter valid otp 
                
              </div>
            )}
     </>
  }   

            <button onClick={()=> onLogin()} className='signup__form__submit-btn' > {page === 1 ? 'CREATE ACCOUNT' : 'VERIFY' } </button>
            {page === 1 &&<hr />}
            </div>
            {page === 1 && <div className='signup__footer' > 
            Don't have an Account 
            <b onClick={()=> router.push('/login')}>LOGIN</b>
            </div>}

        </div>

    </div>
  );
}



export default Signup;
