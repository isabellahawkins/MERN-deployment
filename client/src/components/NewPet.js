import React, { useState } from 'react';
import axios from 'axios'; 
import { navigate } from '@reach/router';


const NewPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const AddPet = e => {
            e.preventDefault();
            const addedPet = {name,type,description, skill1, skill2, skill3};
            axios.post("http://localhost:8000/api/pets" , addedPet)
              .then(res => {
                if(res.data.errors) {
                  setErrors(res.data.errors);
                  console.log(res.data.errors);
                } else {
                navigate("/");
              }})
              .catch(err => {
                console.log(err);
              });
          }

        const Cancel = e => {
            navigate("/");
        }

    return (
        <form onSubmit={ AddPet }>
            <p>Name: 
                <input type="text" onChange={e => setName(e.target.value)} ></input>
                {errors.name ? <span className="error">{errors.name.message}</span> : ""}
            </p>
            <p>Type: 
                <input type="text" onChange={e => setType(e.target.value)}></input>
                {errors.type ? <span className="error">{errors.type.message}</span> : ""}
            </p>
            <p>Description: 
                <input type="text" onChange={e => setDescription(e.target.value)} ></input>
                {errors.description ? <span className="error">{errors.description.message}</span> : ""}
            </p>
            <p>Skills(optional):</p>
            <p>Skill 1: <input type="text" onChange={e => setSkill1(e.target.value)} ></input></p>
            <p>Skill 2: <input type="text" onChange={e => setSkill2(e.target.value)} ></input></p>
            <p>Skill 3: <input type="text" onChange={e => setSkill3(e.target.value)} ></input></p>
            <input className="btn" type="submit" value="Add Pet"/>
            <input className="btn" onClick={Cancel} type="submit" value="Cancel" />
     </form>
    );
}

export default NewPet; 