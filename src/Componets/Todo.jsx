import React, { useState } from 'react';
const Todo = () => {
    const [gettextv, setGettext] = useState();
    const [item, setItem] = useState([]);
    const getText = (e) => {
        setGettext(e.target.value);
    }

    const Addnote = (e) => {
        e.preventDefault();
        setItem((oldata) => {
            return [...oldata, gettextv];
        });
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <h1>{gettextv}</h1>
                        <form onSubmit={Addnote}>
                            <input onChange={getText} className="form-control" type="text" placeholder="Add Note" />
                            <br />
                            <input type="submit" className="btn btn-success" />
                        </form>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <ol>
                            {
                                item.map((predata) => {
                                    return <li>{predata}</li>;
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;