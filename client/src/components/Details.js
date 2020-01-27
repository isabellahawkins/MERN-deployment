import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Details = props => {
    const [pets, setPets] = useState([]);
    const[pet, setPet] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + props._id)
            .then(res => setPet(res.data))
            .catch(err => console.log(err));
    }, [props._id])

    const adopt = (pet, _id) => {
        console.log("lets adopt pet" , pet);
        axios.delete('http://localhost:8000/api/pets/' + _id)
            .then(res => {
                console.log(res);
                let tempPets = [...pets];
                tempPets.splice(pet, 1);
                setPets(tempPets);
            })
            .catch(err => console.log(err));
    }

    

    return (
        <>
            <h1>Pet Shelter</h1>
            <fieldset>
                <legend className="detailHead">Details about {pet.name}!</legend>
                <h3>Pet Type: {pet.type}</h3>
                <h3>Description: {pet.description}</h3>
                <h3>Skills:</h3>
                <ul>
                    <li>{pet.skill1}</li>
                    <li>{pet.skill2}</li>
                    <li>{pet.skill3}</li>
                </ul>
                <h3>Likes: {pet.likes}</h3>
            </fieldset>
            {/* <button className="btn4" >Adopt this pet!</button> */}
            <button className="btn4" onClick={e => adopt(pet, pet._id)}>Adopt this pet!</button>
        </>
    )
}
export default Details;