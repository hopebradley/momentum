import React from 'react';

const Workout = ({workout}) => {

    return (
        <div className="workout">
            <h1>I am a workout</h1>
            {workout.title}
        </div>
        
    )
}

export default Workout;