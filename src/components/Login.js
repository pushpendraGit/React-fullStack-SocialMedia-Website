import React from 'react';

class Login extends React.Component {
    constructor(props)
    {
        super(props);

      /*  
      //this was for uncontrolled component handled
      this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();*/

        this.state = {

            email:'',
            password:''
        }
    }

    handleEmailChange = (e) => {

       // console.log('Email',e.target.value)

        this.setState({
            email:e.target.value
        })


    }

    handlePasswordChange = (e) => {

       // console.log('Password',e.target.value);

        this.setState({
            password:e.target.value
        })



    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        /* console.log('this.emailInputRef', this.emailInputRef);

         console.log('this.passwordInputRef', this.passwordInputRef)*/

         console.log('Your state is', this.state)
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">

                    <input type="email" placeholder="Email" 
                    //ref= {this.emailInputRef}  //this was for uncontrolled component form handle

                    onChange = {this.handleEmailChange}

                    value = {this.state.email}
                     required />

                </div>

                <div className="field">
                    
                <input type="password" placeholder="Password" 
                //ref={this.passwordInputRef} //this was for uncontrolled component form handle

                onChange = {this.handlePasswordChange}

                value = {this.state.password}
                 required />

                </div>

                <div className="field">
               <button onClick = {this.handleFormSubmit}>Log In</button>

                </div>

            </form>
        );
    }
}

export default Login;