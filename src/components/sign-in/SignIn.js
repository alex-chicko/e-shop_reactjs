import React,{useState} from 'react';
import FormInput from '../form-input/FormIput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../firebase/Firebase.utils';

const SignIn = () => {

    const [signInState, setSignInState] = useState({
        email:'',
        password:''
    })

    const handleSubmit = (event) => {
        
        event.preventDefault();
        setSignInState({
            email:'',
            password: ''
        })
    }

    const handleChange = (event) => {
        
      
        const {value, name} = event.target;

        setSignInState({...signInState,[name]: value});
    }

    return (
        <div className='sign-in'>
            <h2> I already have account </h2>
            <span>Sign In with your email </span>

            <form onSubmit={handleSubmit}>
           
            <FormInput handleChange={handleChange} name='email' type='email' value={signInState.email} required label='email' />
            
            <FormInput  handleChange={handleChange} name='password' type='password' value={signInState.password} required label='password'/>
            <div className='buttons'>

            <CustomButton type='submit'>Submit</CustomButton> 
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton> 
            </div>
            </form>
        </div>
    )
}

export default SignIn;