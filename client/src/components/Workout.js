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
        <div className="workout box">
            <h2 className="workout-title">{workout.title.toLowerCase()}</h2>
            <div className="workout-body">
                <h3>@{workout.user.username}</h3>
                <h4>{workout.activity.toLowerCase()}</h4>
                <h4>{minutesToHours()}</h4>
            </div>
        </div>
        
    )
}

export default Workout;