import React from 'react';

export default class Login extends React.PureComponent{
    constructor(){
        //super();

        this.state ={
            username: '',
            password: ''
        }
        this.username = this.username.bind(this);
        this.password = this.password.bind(this);
        this.login = this.login.bind(this);
    }
          username(event) {
            this.setState({ username: event.target.value })
          }
          password(event) {
            this.setState({ password: event.target.value })
          }

          login(){
            fetch('https://api.sumra.net/auth/v1/chat/authenticate', {
                      method: 'post',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                      })
                    }).then((Response) => Response.json())
                      .then((Result) => {
                        if (Result.Status == 'Success')
                                this.props.history.push("/chat");
                          alert('Sorry! Un-authenticated User')
                      })
          }

          render(){
              return(
                  <div>
                      <input
                       type="text"
                       id="username"
                       placeholder="Enter Username"
                       onChange={this.username}
                />
                    <input
                       type="text"
                       id="password"
                       placeholder="Enter Password"
                       onChange={this.password}
                />
                   <input
                       type="submit"
                       id="login-btn"
                       onClick={this.login}
                       value="Sign Up"
                />
                  </div>
              );
          }

}