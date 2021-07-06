import React from 'react';

const Workout = ({workout}) => {

    function minutesToHours() {
        const totalMinutes = workout.minutes;
        if (totalMinutes < 59) {
            return totalMinutes+"m";
        }
        else {
            const extraMins = totalMinutes%60;
            const hours = (totalMinutes-extraMins)/60;
            return hours+"h "+extraMins+"m";
        }
    }

    return (
        <div className="workout">
            <h3 className="workout-title">{workout.title.toLowerCase()}</h3>
            {console.log(workout.user)}
            <p>@{workout.user.username}</p>
            <h3>activity – {workout.activity.toLowerCase()}</h3>
            <h3>time taken – {minutesToHours()}</h3>
        </div>
        
    )
}

export default Workout;