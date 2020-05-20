import { Link } from "react-router-dom";
import React from 'react';

const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`} className="btn btn-outline-secondary mr-2">
                    <i className="fas fa-edit"></i>
                </Link>
                <button className='btn btn-outline-secondary' onClick={() => { props.deleteExercise(props.exercise._id) }}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );
}

export default Exercise