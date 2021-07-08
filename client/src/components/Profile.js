import React, { useState } from 'react';
import ProfileWorkout from './ProfileWorkout';

const Profile = ({ user, setLoggedIn, loadUser }) => {

    const [deleted, setDeleted] = useState(false);
    // const [workouts, setWorkouts] = useState(user.workouts);

    // useEffect(() => {
    //     setWorkouts(user.workouts);
    // })

    function handleDeleteAccount() {
        setDeleted(true);
        setTimeout(() => {
            fetch("/delete-account", {
            method: "DELETE"
            })
            .then(() => {
                setLoggedIn(false);
                setDeleted(false);
            })
        }, 2000);
    }

    function handleDeleteWorkout(e) {
        console.log(e.target.parentElement.id)
        const workout_id = e.target.parentElement.id;
        fetch("/workouts/"+ workout_id, {
            method: "DELETE"
        })
        .then(() => {
            loadUser();
        });
    }



    if (!user.hasOwnProperty("name")) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="profile">
            <h1>hello, {user.name}!</h1>
            <div className="profile-info">
                <h3>profile information:</h3>
                <p><strong>username:</strong> {user.username}</p>
                <p><strong>activity level:</strong> {user.activity_level}</p>
                <button className="delete-button" onClick={handleDeleteAccount}>Delete Account</button>
                {deleted ? <p className="delete-message">Account Deleted. Logging out now...</p> : <p></p>}
            </div>
            <div className="user-workouts">
                <h2>workouts:</h2>
                {user.workouts ? user.workouts.map(w => <ProfileWorkout key={w.id} handleDeleteWorkout={handleDeleteWorkout} loadUser={loadUser} user={user} workout={w}/>) : null}
            </div>
            <br></br>
        </div>
    )
}

export default Profile;