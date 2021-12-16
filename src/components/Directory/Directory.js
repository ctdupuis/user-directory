import React, { useState } from 'react'
import './Directory.css'
import data from '../../starter_files/data';
import UserCard from './UserCard/UserCard';

export default function Directory() {
    const [users, updateUsers] = useState(data);
    const [id, setId] = useState(1)

    const min = 1;
    const max = data.length;

    let currentUser = data.find(user => user.id === id)
    const prev = "< Previous"
    const next = "Next >"

    const handleClick = e => {
        if (e.target.innerText === next) {
            if (id !== max) {
                setId(id + 1)
            }
        } else {
            if (id !== min) {
                setId(id - 1)
            }
        }
    }

    return (
        <div className="directory">
            <UserCard user={currentUser} min={min} max={max} />
            <div className="controls">
                <button onClick={handleClick}>{prev}</button>
                <button>Create</button>
                <button>Edit</button>
                <button>Delete</button>
                <button onClick={handleClick}>{next}</button>
            </div>
        </div>
        
    )
}
