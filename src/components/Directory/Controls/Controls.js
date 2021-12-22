import React from 'react';

export default function Controls({ handleClick, removeUser, isEditing, setEditing, isCreating, setCreating }) {

    const prev = "< Previous"
    const next = "Next >"

    return (
        <div className="controls">
                <button className="nav" onClick={handleClick}>{prev}</button>
                { !isEditing ?
                    <button className="crud" onClick={() => setEditing(!isEditing)}>Edit</button>
                    :
                    <button className="crud" onClick={() => setEditing(!isEditing)}>Cancel</button>
                }
                <button className="crud" onClick={removeUser}>Delete</button>
                { !isCreating ?
                    <button className="crud" onClick={() => setCreating(!isCreating)}>New</button>
                    :
                    <button className="crud" onClick={() => setCreating(!isCreating)}>Cancel</button>
                }
                <button className="nav" onClick={handleClick}>{next}</button>
        </div>
    )
}
