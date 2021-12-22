import React, { useState } from 'react'
import './Directory.css'
import data from '../../starter_files/data';
import UserCard from './UserCard/UserCard';
import EditCard from './EditCard/EditCard';

export default function Directory() {
    const [users, updateUsers] = useState(data);
    const [id, setId] = useState(1);
    const [isEditing, setEditing] = useState(false);

    const min = 1;
    const max = data.length;

    const prev = "< Previous"
    const next = "Next >"
    
    let currentUser = users.find(user => user.id === id)

    const updateUser = user => {
        let targetIndex = users.indexOf(currentUser)
        let newArray = [...users]
        newArray[targetIndex] = user
        // debugger
        updateUsers(newArray)
    }

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

    const handleCard = () => {
        if (isEditing) {
            return(<EditCard user={currentUser} min={min} max={max} updateUser={updateUser} setEditing={setEditing} />)
        } else {
            return(<UserCard user={currentUser} min={min} max={max} />)
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
                <button className="crud">Delete</button>
                <button className="crud">New</button>
                <button className="nav" onClick={handleClick}>{next}</button>
            </div>
        </div>
        
    )
}
