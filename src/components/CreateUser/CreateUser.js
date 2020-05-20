import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        this.setState({
            username: ''
        });
    }

    render() {
        return (
            <div className='container'>
                <h1>Create New User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            required
                            name='username'
                            type='text'
                            autoComplete='off'
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='submit'
                            value='Create User'
                            className='btn btn-outline-secondary'
                        />
                    </div>
                </form>
            </div>
        );
    }

}