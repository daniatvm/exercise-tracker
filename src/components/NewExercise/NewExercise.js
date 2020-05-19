import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class NewExercise extends Component {
    constructor(props) {
        super(props);
        //binding para tener this y props disponible en las funciones.
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] // para seleccionar los usuarios desde el menú
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
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
            duration: this.state.duration
        }

        console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
            <div className='container mt-4'>
                <h1>Create New Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select ref='userInput' required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option key={user} value={user}>
                                        {user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type='text' required className='form-control' value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className='form-group'>
                        <label>Duration (minutes): </label>
                        <input type='text' required className='form-control' value={this.state.duration} onChange={this.onChangeDuration} />
                    </div>
                    <div className='form-group'>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value="Create Exercise Log" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        );
    }
}