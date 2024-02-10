import { useState } from 'react';
import "./AuthInputs.css";
// import {styled} from "styled-components";
import Button from "./Button";
import CustomInput from './Input';

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

export default function AuthInputs() {
  const [enteredInput, setEnteredInput] = useState({email: '', password:'', submitted: false});

  function handleInputChange(identifier, value) {
    setEnteredInput((prevInput) => ({
      ...prevInput,
      [identifier]: value,
    }));
  }

  function handleSubmit(){
    handleInputChange('submitted', true);
  };


  const emailNotValid = enteredInput.submitted && !enteredInput.email?.includes('@');
  const passwordNotValid = enteredInput.submitted && enteredInput.password?.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="flex w-full flex-col max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto">
          <div className="flex flex-col gap-2 mb-6">
            <p className="paragraph">
              {/* <Label $invalid={emailNotValid}
              //  className={`label ${emailNotValid ? 'invalid' : undefined}`}
              >Email</Label>
              <Input $invalid={emailNotValid}
                type="email"
                // className={emailNotValid ? 'invalid' : undefined}
                onChange={(event) => handleInputChange('email', event.target.value)}
              /> */}
              <CustomInput
                label="Email"
                type="email"
                onChange={(event) => handleInputChange('email', event.target.value)}
                invalid={emailNotValid}
              ></CustomInput>
            </p>
            <p>
              {/* <Label $invalid={passwordNotValid}
                //  className={`label ${emailNotValid ? 'invalid' : undefined}`}
                >Password
              </Label>
              <Input $invalid={passwordNotValid}
                type="password"
                // className={passwordNotValid ? 'invalid' : undefined}
                onChange={(event) =>
                  handleInputChange('password', event.target.value)
                }/> */}
              <CustomInput
                label="Password"
                type="password"
                onChange={(event) => handleInputChange('password', event.target.value)}
                invalid={passwordNotValid}
              ></CustomInput>
            </p>
        </div>
        <div className="flex justify-end gap-4">
          <button type="button" className="text-amber-400 hover:text-amber-500">
            Create a new account
          </button>
          <Button 
          // className='button'
          onClick={handleSubmit}>Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

