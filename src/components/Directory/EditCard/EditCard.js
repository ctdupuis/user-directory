import React from 'react';
import { useInput } from '../../../hooks/UseInput';

export default function EditCard({ user, min, max }) {
    const favMovies = user.favoriteMovies.map((movie, idx) => <li key={idx}><input type="text" value={movie} /></li>)

    const {value, bind, reset} = useInput(user.name.first)

    return (
        <div className="user-card">
            <div className="index">
                <h3>{user.id}/{max}</h3>
            </div>
            <div className="title">
                <h3 style={{marginRight: "2%"}}>First: </h3> <input style={{marginRight: "2%"}} type="text" value={value} {...bind} />  <h3 style={{marginRight: "2%"}}>Last: </h3> <input type="text" value={user.name.last} />
            </div>
            <div className="user-info">
                <div className="location">
                    <h3 style={{ display: "inline" }}>City: </h3> <input type="text" value={user.city} />
                    <h3 style={{ display: "inline", marginLeft: "2%" }}>Country: </h3><input type="text" value={user.country} />
                </div>
                <div className="job-title">
                    <strong>Job Title:</strong> <input type="text" value={user.title} />
                </div>
                <div className="employer">
                    <strong>Employer:</strong> <input type="text" value={user.employer} />
                </div>
                <div className="movies">
                    <strong>Favorite Movies:</strong>
                    <ol>
                        {favMovies}
                    </ol>
                </div>
                <button className="crud">Save</button>
            </div>
        </div>
    )
}
