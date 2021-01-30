import React from 'react';

export default class Username extends React.PureComponent{
    constructor(){
        //super();

        this.state ={
          username: ''
        }
        this.username = this.username.bind(this);
        this.register = this.register.bind(this);
    }
          username(event) {
            this.setState({ username: event.target.value })
          }

          register(){
            fetch('https://api.sumra.net/auth/v1/validate', {
                      method: 'get',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        username: this.state.username
                      })
                    }).then((Response) => Response.json())
                      .then((Result) => {
                        if (Result.Status == 'Success')
                                this.props.history.push("/Login");
                          alert('Sorry! Username already exist')
                      })
          }

          render(){
              return(
                  <div>
                    <h2>Enter Username</h2>
                      <input
                       type="text"
                       id="username"
                       placeholder="Enter Username"
                       onChange={this.username}
                     />
                   <input
                       type="submit"
                       id="username-btn"
                       onClick={this.register}
                       value="Submit"
                    />
                  </div>
              );
          }

}