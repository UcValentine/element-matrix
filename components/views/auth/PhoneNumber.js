import React from 'react';


export default class PhoneNumber extends React.PureComponent{
    constructor(){
        //super();

        this.state ={
            phone_number: '',
            device_id: ''
        }
        this.phone_number = this.phone_number.bind(this);
        this.device_id = this.device_id.bind(this);
        this.register = this.register.bind(this);
    }
          phone_number(event) {
            this.setState({ phone_number: event.target.value })
          }
          device_id(event) {
            this.setState({ device_id: event.target.value })
          }

          register(){
            fetch('https://api.sumra.net/auth/v1/send-code', {
                      method: 'post',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        phone_number: this.state.phone_number,
                        device_id: this.state.device_id
                      })
                    }).then((Response) => Response.json())
                      .then((Result) => {
                        if (Result.Status == 'Success')
                                this.props.history.push("/Register");
                          alert('Sorry! error with phone number')
                      })
          }

          render(){
              return(
                  <div>
                      <input
                       type="tel"
                       id="phone_number"
                       placeholder="Your phone number"
                       onChange={this.phone_number}
                />
                    <input
                       type="text"
                       id="device_id"
                       placeholder="device id"
                       onChange={this.device_id}
                />
                   <input
                       type="submit"
                       id="btn"
                       onClick={this.register}
                       value="Next >"
                />
                  </div>
              );
          }

}