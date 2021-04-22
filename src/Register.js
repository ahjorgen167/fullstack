import React from 'react'
import Axios from 'axios';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit() {
        Axios.post('/api/user/register', this.state)
            .then(function (response) {
                window.location.href = '/friends';

            })
            .catch(function (error) {
                console.error(error)
            })

    }


    render() {

        return(
            <div>
                <h1>Register New User</h1>
                <label for="username">
                    Username
                </label>
                <input id="username" type="text" onChange={(e) => this.setState({username: e.target.value})}/>
                <label for="username">
                    Password
                </label>
                <input id="password" type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                
                <button onClick={() => this.onSubmit()} >Create User</button>

            </div>
        
        )


    }


}