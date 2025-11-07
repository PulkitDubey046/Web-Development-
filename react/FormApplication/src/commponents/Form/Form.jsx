import { useState, useRef, useEffect, use } from 'react';
import validatePassword from '../../helper/passwordValidator';
import validateEmail from '../../helper/emailValidator';
import './Form.css'
function Form() {
    const exampleRef = useRef("Abc");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(exampleRef);
    }, []);

    const [formvalues, setFormValues] = useState({
        email: '',
        password: ''
    });
    
    const handleValidatePassword = () => {
        const password = formvalues.password;
        if(!validatePassword(password)) {
            console.log('Password is not valid');
        }
    }
    
    const handleValidateEmail = () => {
        const email = formvalues.email;
        if(!validateEmail(email)) {
            console.log('Email is not valid');
        }
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleValidatePassword();
        handleValidateEmail();
        console.log('Form submitted with values:', formvalues);
    }
        
    
    return (
        <>
            <div>New Form</div> 

            Count: 

            <form onSubmit={handleFormSubmit}>
                <div className="email-input-wrapper wrapper">
                    <label htmlFor="email-input">Email: </label>
                    <input  
                        type="text" 
                        id="email-input" 
                        name="email" 
                        value={formvalues.email} 
                        onChange= {(e) => setFormValues({ ...formvalues, email: e.target.value })}
                        required 
                    />
                </div>

                <div className="password-input-wrapper wrapper">
                    <label htmlFor="password-input">Password: </label>
                    <input 
                        type="password" 
                        id="password-input" 
                        name="password" 
                        value={formvalues.password} 
                        onChange= {(e) => setFormValues({ ...formvalues, password: e.target.value })}  
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form