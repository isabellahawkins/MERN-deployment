import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { navigate } from '@reach/router';


const EditPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    useEffect (() => {
        axios.get('http://localhost:8000/api/pets/' + props._id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                console.log(res.data)}
                )
            .catch(err => console.log(err));
        console.log("when does this run?", props._id);
    }, [props._id])

    const ChangePet = e => {
            e.preventDefault();
            const editPet = {name,type,description, skill1, skill2, skill3};
            axios.post('http://localhost:8000/api/pets/' + props._id , editPet)
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
        <form onSubmit={ ChangePet }>
            <p>Name: 
                <input type="text" onChange={e => setName(e.target.value)} value={name}></input>
                {errors.name ? <span className="error">{errors.name.message}</span> : ""}
            </p>
            <p>Type: 
                <input type="text" onChange={e => setType(e.target.value)} value={type}></input>
                {errors.type ? <span className="error">{errors.type.message}</span> : ""}
            </p>
            <p>Description: 
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} ></input>
                {errors.description ? <span className="error">{errors.description.message}</span> : ""}
            </p>
            <p>Skills(optional):</p>
            <p>Skill 1: <input type="text" onChange={e => setSkill1(e.target.value)} value={skill1}></input></p>
            <p>Skill 2: <input type="text" onChange={e => setSkill2(e.target.value)} value={skill2} ></input></p>
            <p>Skill 3: <input type="text" onChange={e => setSkill3(e.target.value)} value={skill3}></input></p>
            <input className="btn" type="submit" value="Update Pet"/>
            <input className="btn" action="action" onClick={Cancel} value="Cancel" />
     </form>
    );
}

export default EditPet; 