import React from 'react';
import ProfileWorkout from './ProfileWorkout';

const Profile = ({ user, setLoggedIn }) => {

    function handleDeleteAccount() {
        fetch("/delete-account", {
            method: "DELETE"
        })
        .then(() => setLoggedIn(false));
    }

    return (
        <div className="profile">
            <h1>hello, {user.name}!</h1>
            <div className="profile-info">
                <h3>profile information:</h3>
                <p><strong>username:</strong> {user.username}</p>
                <p><strong>activity level:</strong> {user.activity_level}</p>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
            <div className="user-workouts">
                <p>workouts:</p>
                {console.log(user.workouts)}
                {user.workouts.map(w => <ProfileWorkout workout={w}/>)}

            </div>
            <br></br>
        </div>
    )
}

export default Profile;