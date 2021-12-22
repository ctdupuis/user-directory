import React from 'react';
import { useInput } from '../../../hooks/UseInput';

export default function EditCard({ user, min, max, updateUser, setEditing }) {

    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput(user.name.first);
    const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput(user.name.last);
    const { value:city, bind:bindCity, reset:resetCity} = useInput(user.city);
    const { value:country, bind:bindCountry, reset:resetCountry} = useInput(user.country);
    const { value:title, bind:bindTitle, reset:resetTitle} = useInput(user.title);
    const { value:employer, bind:bindEmployer, reset:resetEmployer} = useInput(user.employer)
    const { value:movie1, bind:bindMovie1, reset:resetMovie1} = useInput(user.favoriteMovies[0])
    const { value:movie2, bind:bindMovie2, reset:resetMovie2} = useInput(user.favoriteMovies[1])
    const { value:movie3, bind:bindMovie3, reset:resetMovie3} = useInput(user.favoriteMovies[2])

    const handleClick = () => {
        let obj = {
            id: user.id,
            name: {
                first: firstName,
                last: lastName
            },
            city: city,
            country: country,
            title: title,
            employer: employer,
            favoriteMovies: [movie1, movie2, movie3]
        }
        updateUser(obj)
        setEditing(false)
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
                    <h3 style={{ display: "inline" }}>City: </h3> <input type="text" defaultValue={city} {...bindCity}/>
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
                        <li>
                            <input type="text" value={movie1} {...bindMovie1}/>
                        </li>
                        <li>
                            <input type="text" value={movie2} {...bindMovie2}/>
                        </li>
                        <li>
                            <input type="text" value={movie3} {...bindMovie3}/>
                        </li>
                    </ol>
                </div>
                <button className="crud" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}
