import React, { useState } from 'react';

import Td from './Componets/Td';
const App = () => {
    const [reginfo, regState] = useState(
        {
            firstname: '',
            lastname: '',
            address: ''

        }
    );
    //This variable for Set hold value
    const [addnote, addnoteState] = useState([])

    //Get value Function
    const getvalue = (event) => {
        const { name, value } = event.target
        regState((olddata) => {
            return {
                ...olddata,
                [name]: value
            }

        })
        // console.log(reginfo)
    }

    //This function for Add Note
    const addbtn = () => {
        addnoteState((predata) => {
            return [...predata, reginfo]
        })
        console.log(reginfo)
    }

    //This function for delete
    const dele = (id) => {
        addnoteState((oldvalue) => {
            return oldvalue.filter((leftarray, arryvalu) => {
                return id !== arryvalu
            })
        })
    }

    return (
        <>
            <input type="text" name="firstname" value={reginfo.firstname} placeholder="Enter first name" onChange={getvalue} />
            <input type="text" name="lastname" value={reginfo.lastname} placeholder="Enter first lastname" onChange={getvalue} />
            <input type="text" name="address" value={reginfo.address} placeholder="Enter first Address" onChange={getvalue} />
            <button onClick={addbtn}>Add me</button>

            {
                addnote.map((adddata, index) => {
                    return <Td
                        key={index}
                        id={index}
                        firstname={adddata.firstname}
                        lastname={adddata.lastname}
                        address={adddata.address}
                        onselect={dele}
                    />
                })

            }
        </>
    )
}
export default App;