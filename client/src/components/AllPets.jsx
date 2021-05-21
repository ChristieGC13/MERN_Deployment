import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = () => {

    const [allPets, setAllPets] = useState([]); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/petShelter")
            .then(res => {
                console.log(res)
                setAllPets(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="d-flex justify-content-end">
            <Link to="/petShelter/new" className="btn btn-info">Add a pet to the shelter</Link>
            </div>
            <div className="mt-5">
                <h3 className="mt-3">These pets are looking for a good home</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td><Link to={`/petShelter/${pet._id}`} >{pet.name}</Link></td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link to={`/petShelter/${pet._id}`} className="btn btn-outline-primary ml-2 mr-2">Details</Link>|
                                            <Link to={`/petShelter/edit/${pet._id}`} className="btn btn-outline-secondary ml-2">Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
            </div>
    </>
    );
};


export default AllPets;