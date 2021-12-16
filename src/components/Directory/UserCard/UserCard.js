import React from 'react'
import './UserCard.css'

export default function UserCard({ user, min, max }) {
    return (
        <div className="user-card">
            <div className="index">
                <h3>{user.id}/{max}</h3>
            </div>
            <div className="title">
                <h3>{user.name.first} {user.name.last}</h3>
            </div>
            <div className="user-info">
                <div className="location">
                    <strong>From:</strong> {user.city}, {user.country}
                </div>
            </div>
        </div>
    )
}
