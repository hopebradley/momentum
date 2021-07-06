import React from 'react';

const ProfileWorkout = ({workout}) => {

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

    function handleDeleteWorkout(e) {

    }

    function handleUpdateWorkout(e) {
        
    }

    return (
        <div className="profile-workout">
            <h3 className="workout-title">{workout.title.toLowerCase()}</h3>
            <h3>activity – {workout.activity.toLowerCase()}</h3>
            <h3>time taken – {minutesToHours()}</h3>
        </div>
        
    )
}

export default ProfileWorkout;