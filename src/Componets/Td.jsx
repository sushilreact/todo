import React from 'react';
const Td = (props) => {

    return (
        <>
            <div className="row">
                <div className="col-2">{props.firstname}</div>
                <div className="col-2">{props.lastname}</div>
                <div className="col-2">{props.address}</div>
                <div className="col-2" onClick={() => { props.onselect(props.id) }}>X</div>
            </div>
        </>
    )
}
export default Td