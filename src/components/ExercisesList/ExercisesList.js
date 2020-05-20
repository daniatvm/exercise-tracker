import React, { Component } from 'react';
import Exercise from './Exercise'
import axios from 'axios';

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        console.log('component did mount');
        this.getExercise();
        // axios.get('http://localhost:5000/exercises')
        //     .then((res) => {
        //         this.setState({ exercises: res.data })
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    async getExercise() {
        const res = await axios.get('http://localhost:5000/exercises');
        const exercises = res.data;
        this.setState({
            exercises
        });

    }

    deleteExercise(id) {
        
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then((res) => {
                console.log(res.data);
                //refrescar los existentes, solo estarán en la lista los que no se borraron
                this.setState({
                    exercises: this.state.exercises.filter(element => element._id !== id)
                });
            })
            .catch((err) => console.log(err));
    }

    exerciseList() {
        return this.state.exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />;
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Logged Exercises</h1>
                <table className="table mt-2">
                    <thead className="table-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        );
    }
}