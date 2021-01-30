import React from 'react';

export default class Register extends React.PureComponent{
    constructor(){
        //super();

        this.state ={
          code: '',
          username: '',
          password: ''
        }
        this.code = this.code.bind(this);
        this.username = this.username.bind(this);
        this.password = this.password.bind(this);
    }
          code(event) {
            this.setState({ code: event.target.value })
          }
          username(event) {
            this.setState({ username: event.target.value })
          }
          password(event) {
            this.setState({ password: event.target.value })
          }

          register(){
            fetch('https://api.sumra.net/auth/v1/registration', {
                      method: 'post',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        code: this.state.code,
                        username: this.state.username,
                        password: this.state.password
                      })
                    }).then((Response) => Response.json())
                      .then((Result) => {
                        if (Result.Status == 'Success')
                                this.props.history.push("/Login");
                          alert('Error in registeration')
                      })
          }

          render(){
              return(
                  <div>
                    <h2>Register Page</h2>
                      <input
                       type="text"
                       id="code"
                       placeholder="Enter code"
                       onChange={this.code}
                     />
                     <input
                       type="text"
                       id="username"
                       placeholder="Enter Username"
                       onChange={this.username}
                     />
                     <input
                       type="text"
                       id="password"
                       placeholder="Enter password"
                       onChange={this.password}
                       hidden
                     />
                   <input
                       type="submit"
                       id="signUp-btn"
                       onClick={this.register}
                       value="Sign Up"
                     />
                  </div>
              );
          }

}