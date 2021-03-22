import React from 'react';
const Todoli = (props) => {


    return (
        <>
            <li><span>{props.data}</span> <i className="fa fa-clock-o" onClick={() => { props.onSelect(props.id) }}>X</i></li>
        </>
    )
}

export default Todoli;