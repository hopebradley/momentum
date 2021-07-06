import React from 'react';

const Profile = ({ user, setLoggedIn }) => {

    function handleDeleteAccount() {
        fetch("/delete-account", {
            method: "DELETE"
        })
        .then(() => setLoggedIn(false));
    }

    return (
        <div className="profile">
            Hello, {user.name.toLowerCase()}!
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    )
}

export default Profile;