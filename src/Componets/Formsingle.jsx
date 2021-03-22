import React, { useState } from 'react';


const Formsingle = () => {
    const [loginget, setChange] = useState({
        fname: '',
        lastname: '',
        email: '',
        phone: ''
    });
    const [submit, submitState] = useState([]);

    const inputHandle = (e) => {
        //console.log(e.target.value)
        // console.log(e.target.name);
        const { name, value } = e.target;
        setChange((prevalue) => {
            console.log(prevalue);
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    const submitclick = (e) => {
        // setChange(e.target.value);
        e.preventDefault();
        submitState(loginget);

        // setSubmit(changetext);
    }
    return (
        <>
            <div className="container text-center">

                <div className="col-4">
                    <h1>{submit.fname}</h1>
                    <h2>{submit.lastname}</h2>
                    <h3>{submit.email}</h3>
                    <h4>{submit.phone}</h4>
                    <form onSubmit={submitclick}>

                        <input type="text" name="fname" value={loginget.fname} className="form-control" onChange={inputHandle} placeholder="Enter First Name" />
                        <input type="text" name="lastname" value={loginget.lastname} className="form-control" onChange={inputHandle} placeholder="Enter Last Name" />
                        <input type="email" name="email" value={loginget.email} className="form-control" onChange={inputHandle} placeholder="Enter Email" />
                        <input type="number" name="phone" value={loginget.phone} className="form-control" onChange={inputHandle} placeholder="Enter phone Number" />
                        <input type="submit" className="btn btn-success" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Formsingle;

