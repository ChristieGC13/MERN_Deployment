import { navigate, Link } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';

const NewPet = () => {

    const [inputs, setInputs] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
    })
    const [errors,setErrors] = useState({})

    const onChange = e => {
            setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/petShelter", inputs)
            .then(res => {
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }else{
                    setErrors(res.data)
                }
            })
            .catch(err=> console.log(err))
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-end">
            <Link to="/" className="btn btn-outline-info float-right mr-5">Back to Home</Link>
            </div>
            <h3 className="mt-5">Know a pet needing a home?</h3>
            <form onSubmit= { onSubmit } style={{border: "1px solid black", padding:"10px" }}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Pet Name:</label>
                            <input type="text" name="name"  onChange= { onChange } className="form-control"/>
                            <p className="text-danger">{errors.name? errors.name.message: ""}</p> 
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="type">Pet Type:</label>
                            <input type="text" name="type"  onChange= { onChange } className="form-control"/>
                            <p className="text-danger">{errors.type? errors.type.message: ""}</p> 
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="description">Pet Description:</label>
                            <input type="text" name="description"  onChange= { onChange } className="form-control"/>
                            <p className="text-danger">{errors.description? errors.description.message: ""}</p> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label className="form-label" htmlFor="skill1">Skill 1:</label>
                            <input type="text" name="skill1"  onChange= { onChange } className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="skill2">Skill 2:</label>
                            <input type="text" name="skill2"  onChange= { onChange } className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="skill3">Skill 3:</label>
                            <input type="text" name="skill3"  onChange= { onChange } className="form-control"/> 
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-success" value="Add Pet"/>
            </form>
        </div>
    );
};


export default NewPet;