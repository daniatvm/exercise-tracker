import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ExercisesList from './components/ExercisesList/ExercisesList';
import NewExercise from './components/NewExercise/NewExercise';
import CreateUser from './components/CreateUser/CreateUser';
import EditExercise from './components/EditExercise/EditExercise';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/edit/:id'>
          <EditExercise />
        </Route>
        <Route path='/exercise'>
          <NewExercise />
        </Route>
        <Route path='/user'>
          <CreateUser />
        </Route>
        <Route path='/' exact>
          <ExercisesList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
