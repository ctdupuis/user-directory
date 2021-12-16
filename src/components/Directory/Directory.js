import React, { useState } from 'react'
import './Directory.css'
import data from '../../starter_files/data';

export default function Directory() {
    const [users, updateUsers] = useState(data);
    const [id, setId] = useState(1)
    const min = 1;
    const max = data.length;

    return (
        <div className="directory">
            This is the directory
        </div>
    )
}
