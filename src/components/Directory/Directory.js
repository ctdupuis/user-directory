import React, { useState } from 'react'
import './Directory.css'
import data from '../../starter_files/data';
import UserCard from './UserCard/UserCard';
import EditCard from './EditCard/EditCard';
import NewCard from './NewCard/NewCard';
import Controls from './Controls/Controls';

export default function Directory() {
    const [users, updateUsers] = useState(data);
    const [idx, setIdx] = useState(0);
    const [isEditing, setEditing] = useState(false);
    const [isCreating, setCreating] = useState(false);

    const next = "Next >"
    
    const min = 0;
    const max = users.length;
    
    let currentUser = users[idx]

    const updateUser = user => {
        let newArray = [...users];
        newArray[idx] = user;
        updateUsers(newArray);
    }

    const createUser = user => {
        let newArray = [...users, user]
        updateUsers(newArray);
        setIdx(max);
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
        } else if (isCreating) {
            return(<NewCard min={min} max={max} createUser={createUser} setCreating={setCreating} />)
        } else {
            return(<UserCard user={currentUser} min={min} max={max} idx={idx}/>)
        }
    }

    return (
        <div className="directory">
            {handleCard()}
            <Controls handleClick={handleClick} removeUser={removeUser} isEditing={isEditing} setEditing={setEditing} isCreating={isCreating} setCreating={setCreating} />
        </div>
        
    )
}
