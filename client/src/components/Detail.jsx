import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Detail = (props) => {

    const [details, setDetails] = useState({})
    const [addLikeClicked, setAddLikeClicked] = useState(false);
    const [adoptClicked, setAdoptClicked] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/petShelter/${props.id}`)
        .then(res => {
            console.log("***********", res);
            setDetails(res.data)
        })
        .catch(err => console.log(err))
    }, [addLikeClicked,adoptClicked])

    const addLike = (e, pet) => {
        
        console.log("Trying to give a like to pet:", pet);
        pet.likes += 1;
        axios.put(`http://localhost:8000/api/petShelter/${pet._id}`, pet)
            .then(res => {
                if (res.data) {
                    console.log(res)
                    setAddLikeClicked(!addLikeClicked)

                }
            })
            .catch(err => console.log(err))
    }

    const adoptPet = (e, petId) => {
        axios.delete(`http://localhost:8000/api/petShelter/${petId}`)
            .then(response => {
                console.log(response)
                setAdoptClicked(!adoptClicked);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-info float-right mr-5">Back to Home</Link>
            </div>
                <h1 className="mt-5">Details about: {details.name}</h1>
                <Link onClick= {(e)=>adoptPet(e,details._id)} to="#" className="btn btn-danger float-right" >Adopt {details.name}</Link>
                <h4>Pet Type: {details.type}</h4>
                <h4>Description: {details.description}</h4>
                <h4>Skills: <br/>
                            {details.skill1} <br/>
                            {details.skill2} <br/>
                            {details.skill3}
                </h4>
                <p>{details.likes} Like(s)</p>
                <button className="btn btn-success" onClick={(e) => addLike(e, details)}>Like {details.name}</button>

        </div>
    );
};

export default Detail;