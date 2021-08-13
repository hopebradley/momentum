import React, { useState, useEffect } from 'react';
import Workout from './Workout';

const Community = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("/workouts")
          .then((resp) => resp.json())
          .then(setWorkouts);
      }, []);

    return (
        <div className="community-page has-background-success-light">
            <h1>community workouts</h1>
            {workouts.map(w => <Workout workout={w}/>)}
        </div>
    )

}

export default Community;