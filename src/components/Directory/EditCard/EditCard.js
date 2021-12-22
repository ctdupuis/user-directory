import React from 'react';
import { useInput } from '../../../hooks/UseInput';

export default function EditCard({ user, min, max }) {
    const favMovies = user.favoriteMovies.map((movie, idx) => <li key={idx}><input type="text" value={movie} /></li>)

    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput(user.name.first);
    const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput(user.name.last);
    const { value:city, bind:bindCity, reset:resetCity} = useInput(user.city);
    const { value:country, bind:bindCountry, reset:resetCountry} = useInput(user.country);
    const { value:title, bind:bindTitle, reset:resetTitle} = useInput(user.title);
    const { value:employer, bind:bindEmployer, reset:resetEmployer} = useInput(user.employer)

    const handleClick = () => {
        let obj = {
            name: {
                first: firstName,
                last: lastName
            },
            city: city,
            country: country,
            title: title,
            employer: employer
        }
        console.log(obj)
    }

    return (
        <div className="user-card">
            <div className="index">
                <h3>{user.id}/{max}</h3>
            </div>
            <div className="title">
                <h3 style={{marginRight: "2%"}}>First: </h3> <input style={{marginRight: "2%"}} type="text" defaultValue={firstName} {...bindFirstName} /> 
                <h3 style={{marginRight: "2%"}}>Last: </h3> <input type="text" defaultValue={lastName} {...bindLastName} />
            </div>
            <div className="user-info">
                <div className="location">
                    <h3 style={{ display: "inline" }}>City: </h3> <input type="text" value={city} {...bindCity}/>
                    <h3 style={{ display: "inline", marginLeft: "2%" }}>Country: </h3><input type="text" defaultValue={country} {...bindCountry} />
                </div>
                <div className="job-title">
                    <strong>Job Title:</strong> <input type="text" defaultValue={title} {...bindTitle} />
                </div>
                <div className="employer">
                    <strong>Employer:</strong> <input type="text" defaultValue={employer} {...bindEmployer} />
                </div>
                <div className="movies">
                    <strong>Favorite Movies:</strong>
                    <ol>
                        {favMovies}
                    </ol>
                </div>
                <button className="crud" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}
