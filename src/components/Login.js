import React from 'react';

class Login extends React.Component {
    constructor(props)
    {
        super(props);

        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        console.log('this.emailInputRef', this.emailInputRef);

        console.log('this.passwordInputRef', this.passwordInputRef)
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">

                    <input type="email" placeholder="Email" ref= {this.emailInputRef} required />

                </div>

                <div className="field">
                    
                <input type="password" placeholder="Password" ref={this.passwordInputRef} required />

                </div>

                <div className="field">
               <button onClick = {this.handleFormSubmit}>Log In</button>

                </div>

            </form>
        );
    }
}

export default Login;