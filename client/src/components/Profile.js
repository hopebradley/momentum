import React from 'react';

const Profile = ({ user }) => {

    return (
        <div>
            Hello, {user.name}!
        </div>
    )
}

export default Profile;