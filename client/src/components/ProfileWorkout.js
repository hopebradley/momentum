import React, { useState } from 'react';

const ProfileWorkout = ({ user, workout, handleDeleteWorkout, loadUser}) => {

    const [ editing, setEditing ] = useState(false);
    const [ newMinutes, setNewMinutes ] = useState(workout.minutes);
    const [ newActivity, setNewActivity ] = useState(workout.activity);
    const [ newTitle, setNewTitle ] = useState(workout.title);

    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

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
        setEditing(true);
    }

    function handleUpdateWorkout(e) {
        e.preventDefault();
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
        .then(resp => resp.json())
        .then(data => {
            if (data.hasOwnProperty('errors')) {
                setDataInvalid(true);
                setErrors(data.errors);
            }
            else {
                setDataInvalid(false);
                setEditing(false);
                loadUser();
            }
        });
    }

    function showWorkout() {
        if (!editing) {
            return (
                <div id={workout.id} className="profile-workout box">
                    <div className="profile-workout-title">
                        <h3>{workout.title.toLowerCase()}</h3>
                    </div>
                    <div className="profile-workout-body">
                        <h3>{workout.activity.toLowerCase()}</h3>
                        <h3>{minutesToHours()}</h3>
                        <button className="button is-info is-light is-outlined is-small" onClick={handleEditWorkout}>edit workout</button>
                        <br></br>
                        <button className="button is-danger is-light is-outlined is-small" onClick={handleDeleteWorkout}>delete workout</button>
                    </div>
                </div> 
            )
        }
        else {
            return (
                <div id={workout.id} className="profile-workout box">
                    <form className="editing-workout" onSubmit={handleUpdateWorkout}>
                        <h3>title</h3>
                        <input 
                            type="text" 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)}>
                        </input>
                        <h3>activity</h3>
                        <select 
                            type="text" 
                            value={newActivity} 
                            onChange={(e) => setNewActivity(e.target.value)}>
                                <option>running</option>
                                <option>walking</option>
                                <option>cycling</option>
                                <option>team sports</option>
                                <option>individual sports</option>
                                <option>yoga</option>
                                <option>dance</option>
                                <option>swimming</option>
                                <option>other</option> 
                        </select>
                        <h3>time taken (mins)</h3>
                        <input 
                            type="text" 
                            value={newMinutes} 
                            onChange={(e) => setNewMinutes(e.target.value)}>
                        </input>
                        <br></br>
                        <input type="submit" value="done editing"></input>
                        {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : <p></p>}
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