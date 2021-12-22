import React from 'react'
import './UserCard.css'

export default function UserCard({ user, min, max, idx }) {
    const favMovies = user.favoriteMovies.map((movie, idx) => <li key={idx}>{movie}</li>)

    return (
        <div className="user-card">
            <div className="index">
                <h3>{idx+1}/{max}</h3>
            </div>
            <div className="title">
                <h3>{user.name.first} {user.name.last}</h3>
            </div>
            <div className="user-info">
                <div className="location">
                    <strong>From:</strong> {user.city}, {user.country}
                </div>
                <div className="job-title">
                    <strong>Job Title:</strong> {user.title}
                </div>
                <div className="employer">
                    <strong>Employer:</strong> {user.employer}
                </div>
                <div className="movies">
                    <strong>Favorite Movies:</strong>
                    <ol>
                        {favMovies}
                    </ol>
                </div>
            </div>
        </div>
    )
}
