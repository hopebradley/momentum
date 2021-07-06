import React from 'react';

const ProfileWorkout = ({ user, workout, handleDeleteWorkout }) => {

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

    



    function handleUpdateWorkout(e) {

    }

    return (
        <div id={workout.id} className="profile-workout">
            <h3 className="workout-title">{workout.title.toLowerCase()}</h3>
            <h3>activity – {workout.activity.toLowerCase()}</h3>
            <h3>time taken – {minutesToHours()}</h3>
            <button onClick={handleUpdateWorkout}>edit workout</button>
            <button className="delete-workout" onClick={handleDeleteWorkout}>delete workout</button>
        </div>
        
    )
}

export default ProfileWorkout;