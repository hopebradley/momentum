import React from 'react';

const Profile = ({ user }) => {

    return (
        <div className="profile">
            Hello, {user.name.toLowerCase()}!
        </div>
    )
}

export default Profile;