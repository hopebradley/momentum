import React, { useState } from 'react';

const WorkoutForm = ({ user, loadUser }) => {

    const [title, setTitle] = useState("");
    const [activity, setActivity] = useState("–select one–");
    const [minutes, setMinutes] = useState("");
    const [created, setCreated] = useState(false);

    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title.toLowerCase(),
                activity: activity,
                minutes: minutes,
                user_id: user.id
            })
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data);
            if (data.hasOwnProperty('errors')) {
                setDataInvalid(true)
                setErrors(data.errors)
            }
            else {
                setDataInvalid(false);
                setCreated(true)
                setTitle("");
                setMinutes("");
                setActivity("–select one–")
                setTimeout(() => {
                    setCreated(false)
                }, 3000);
                loadUser();
            }  
        });
    }

    return (
        <div className="workout-form">
            <form onSubmit={handleSubmit}>
                <h2>log a workout:</h2>
                <p>title:</p>
                <input 
                    id="title"
                    type="text" 
                    value={title}
                    autoComplete="off"
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <p>pick an activity:</p>
                <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
                    <option disabled={true}>–select one–</option>
                    <option>running</option>
                    <option>walking</option>
                    <option>cycling</option>
                    <option>sports</option>
                    <option>yoga</option>
                    <option>dance</option>
                    <option>swimming</option>
                    <option>other</option>
                </select>
                <p>minutes spent:</p>
                <input 
                    id="minutes"
                    type="text" 
                    value={minutes}
                    autoComplete="off"
                    onChange={(e) => setMinutes(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type="submit"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : <p></p>}
                {created ? <p className="success">successfully created! check the community page or your profile to view your workout.</p> : <p></p>}
            </form>
        </div>
    )
}

export default WorkoutForm;