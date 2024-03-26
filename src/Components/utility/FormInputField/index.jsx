import React , {useState} from 'react';

function FormInputField({
  containerClassName,
  labelClassName,
  label,
  inputClassName,
  placeholder,
  value,
  type,
  name,
  onChange,
  disabled,
  required,
  showError,

}) {

  const [showPassword, setShowPassword] = useState(true)
  
  const labelHtml = label && (
    <label className={labelClassName || 'default-label'}>
      {label}
      {' '}
      <span style={{ color: 'red' }}>{required ? '*' : ''}</span>
    </label>
  );
  return (
    <div className={containerClassName || "form__container"}>
      {labelHtml}      
    <div className="input__wrapper">
            <input
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              type={ type === 'password' ? (showPassword ? "password" : 'text') :  type}
              name={name}
              className={inputClassName || 'default-input'}
              disabled={disabled}
            />
            {type === 'password' && <div onClick={()=>setShowPassword(!showPassword)} className="input-password">{!showPassword ?'Hide': 'Show'}</div>}
            {showError && (
              <div className="input-error">
                *Please enter
                {` ${name}`}
              </div>
            )}
        </div>

        

    </div>

  );
}

export default (FormInputField);
