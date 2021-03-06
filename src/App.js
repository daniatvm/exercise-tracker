import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ExercisesList from './components/ExercisesList/ExercisesList';
import NewExercise from './components/NewExercise/NewExercise';
import CreateUser from './components/CreateUser/CreateUser';
import EditExercise from './components/EditExercise/EditExercise';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/edit/:id'
          render={(routeProps) => {
            return <EditExercise {...routeProps} />
          }}
        />

        <Route path='/exercise'
          render={(routeProps) => {
            return <NewExercise {...routeProps} />
          }}
        />

        <Route path='/user'>
          <CreateUser />
        </Route>
        <Route path='/' exact>
          <ExercisesList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
