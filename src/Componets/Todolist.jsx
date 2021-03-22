import React, { useState } from 'react';
import Todoli from './Todoli';
const Todolist = (props) => {
    const [chgvalget, setStateget] = useState();
    const [itemget, setStateItemget] = useState([]);
    const Gettext = (e) => {
        setStateget(e.target.value);
    }

    const Addme = () => {
        setStateItemget((olddata) => {
            return [...olddata, chgvalget]
        })
    }

    const delteItema = (id) => {
        setStateItemget((olddata) => {
            return olddata.filter((currentdata, currentIDdata) => {
                return currentIDdata !== id;
            })
        })
    }
    return (
        <>

            <input type="text" onChange={Gettext} />
            <button onClick={Addme}>Add me</button>
            <ol>
                {
                    itemget.map((prevalue, index) => {
                        return (
                            <>
                                <Todoli
                                    key={index}
                                    id={index}
                                    data={prevalue}
                                    onSelect={delteItema}
                                />

                            </>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default Todolist;