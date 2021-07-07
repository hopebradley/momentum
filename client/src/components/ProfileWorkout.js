import React, { useState } from 'react';

const ProfileWorkout = ({ user, workout, handleDeleteWorkout, loadUser}) => {

    const [ editing, setEditing ] = useState(false);
    const [ newMinutes, setNewMinutes ] = useState(workout.minutes);
    const [ newActivity, setNewActivity ] = useState(workout.activity);
    const [ newTitle, setNewTitle ] = useState(workout.title);

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

    function handleEditWorkout() {
        console.log(workout.id)
        setEditing(true);
    }

    function handleUpdateWorkout() {
        console.log(workout.id)
        setEditing(false);
        fetch("/workouts/"+workout.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: newTitle,
                activity: newActivity,
                minutes: newMinutes
            })
        })
        .then(() => {
            loadUser();
        })
    }

    function showWorkout() {
        if (!editing) {
            return (
                <div id={workout.id} className="profile-workout">
                    <h3 className="workout-title">{workout.title.toLowerCase()}</h3>
                    <h3>activity – {workout.activity.toLowerCase()}</h3>
                    <h3>time taken – {minutesToHours()}</h3>
                    <button onClick={handleEditWorkout}>edit workout</button>
                    <button className="delete-workout" onClick={handleDeleteWorkout}>delete workout</button>
                </div> 
            )
        }
        else {
            return (
                <div id={workout.id} className="profile-workout">
                    <form onSubmit={handleUpdateWorkout}>
                        <input 
                            type="text" 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)}>
                        </input>
                        <h3>activity –</h3>
                        <input 
                            type="text" 
                            value={newActivity} 
                            onChange={(e) => setNewActivity(e.target.value)}>   
                        </input>
                        <h3>time taken –</h3>
                        <input 
                            type="text" 
                            value={newMinutes} 
                            onChange={(e) => setNewMinutes(e.target.value)}>
                        </input>
                        <input type="submit" value="done editing"></input>
                    </form>
                </div>
            )

        }
    }

    return (
        <div>
            {showWorkout()}
        </div>
    )
    
    
}

export default ProfileWorkout;