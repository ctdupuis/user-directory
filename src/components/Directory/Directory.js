import React, { useState } from 'react'
import './Directory.css'
import data from '../../starter_files/data';
import UserCard from './UserCard/UserCard';
import EditCard from './EditCard/EditCard';

export default function Directory() {
    const [users, updateUsers] = useState(data);
    const [idx, setIdx] = useState(0);
    const [isEditing, setEditing] = useState(false);

    const min = 0;
    const max = users.length;

    const prev = "< Previous"
    const next = "Next >"
    
    let currentUser = users[idx]

    const updateUser = user => {
        let newArray = [...users];
        newArray[idx] = user;
        updateUsers(newArray);
    }

    const removeUser = () => {
        if (window.confirm("Are you sure? This action cannot be unodone")) {
            let newArray = [...users.slice(0, idx), ...users.slice(idx+1, users.length)]
            updateUsers(newArray)
        }
    }

    const handleClick = e => {
        if (e.target.innerText === next) {
            if (idx !== max) {
                setIdx(idx + 1)
            }
        } else {
            if (idx !== min) {
                setIdx(idx - 1)
            }
        }
    }

    const handleCard = () => {
        if (isEditing) {
            return(<EditCard user={currentUser} min={min} max={max} updateUser={updateUser} setEditing={setEditing} />)
        } else {
            return(<UserCard user={currentUser} min={min} max={max} idx={idx}/>)
        }
    }

    return (
        <div className="directory">
            {handleCard()}
            <div className="controls">
                <button className="nav" onClick={handleClick}>{prev}</button>
                { !isEditing ?
                    <button className="crud" onClick={() => setEditing(!isEditing)}>Edit</button>
                    :
                    <button className="crud" onClick={() => setEditing(!isEditing)}>Cancel</button>
                }
                <button className="crud" onClick={removeUser}>Delete</button>
                <button className="crud">New</button>
                <button className="nav" onClick={handleClick}>{next}</button>
            </div>
        </div>
        
    )
}
