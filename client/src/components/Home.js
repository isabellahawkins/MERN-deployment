import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Home = props => {
    const [pets, setPets] = useState([]);
    const [results, setResults] = useState([]); 
    useEffect ( () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets(res.data);
                setResults(res.data);
            })   
            .catch(err => console.log(err)); 
    }, []);
    //delete
    const remove = (i, _id) => {
        console.log("lets remove pet" , i);
        axios.delete('http://localhost:8000/api/pets/' + _id)
            .then(res => {
                console.log(res);
                let tempPets = [...pets];
                tempPets.splice(i, 1);
                setPets(tempPets);
            })
            .catch(err => console.log(err));
    }
    
    const filterResults = e => {
        let searchTerm = e.target.value.toLowerCase();
        setResults(pets.filter(r => r.name.toLowerCase().includes(searchTerm)));
    };
    

    return (
        <>
            <h1>Pet Shelter</h1>
            <h2>These pets are looking for a home!</h2>
            <input className="navbar" type="search" placeholder="&#128269;" onChange={filterResults}/>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        results.map( (p, i) => 
                            <tr key={p._id}>
                                <td>{p.name}</td>
                                <td>{p.type}</td>
                                <td>
                                    <Link to={"/" + p._id} className="btn2">Details</Link>
                                </td>
                                <td>
                                    <Link to={"/edit/" + p._id} className="btn2">Edit</Link>
                                </td>
                                <button className="btn3" onClick={e => remove(i, p._id)}>Delete</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Home;