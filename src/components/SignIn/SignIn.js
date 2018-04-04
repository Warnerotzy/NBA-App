import React, { Component } from 'react';
import styles from './signin.css';

import FormField from '../widgets/FormFields/formFields';

class SignIn extends Component {

    state= {
        registerError:'',
        loading: false,
        formdata: {
            email:{
                element:'input',
                value:'',
                config:{
                    name: 'email-input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password:{
                element: 'input',
                value: '',
                config: {
                    name: 'password-input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }

    }

    updateForm = (element)=>{
        const newFormData = {
            ...this.state.formdata 
        }

        const newElement = {
            ...newFormData[element.id]
        }

        newElement.value = element.event.target.value;
        newFormData[element.id] =  newElement;

         this.setState({
             formdata: newFormData
         });

    }

    render() {
        return (
            <div className={styles.logContainer}>
                <form>
                    <h2>Register / Login</h2>
                    <FormField 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    />
                </form>
            </div>
        );
    }
}



export default SignIn;