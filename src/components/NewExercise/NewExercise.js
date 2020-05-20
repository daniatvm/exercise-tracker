import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class NewExercise extends Component {
    constructor(props) {
        super(props);
        //binding para tener this y props disponible en las funciones.
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] // para seleccionar los usuarios desde el menú
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then((res) => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleChanges(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then((res) => {
                console.log(res.data);
                this.props.history.push('/');
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <h1>Create New Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <select
                            required
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleChanges}>
                            {
                                this.state.users.map((user) => {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>Description: </label>
                        <input
                            required
                            name="description"
                            type="text"
                            autoComplete='off'
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='duration'>Duration (in minutes): </label>
                        <input
                            required
                            name="duration"
                            type="number"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.handleChanges}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div className="form-group">
                            <DatePicker className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-outline-secondary" />
                    </div>
                </form>
            </div>
        );
    }
}