import React from 'react';
const Smallnote = (props) => {
    return (
        <>
            <h4>{props.title}</h4>
            <h4>{props.subtitle}</h4>
            <h4>{props.message}</h4>
            <span>{props.id}</span>
            <span onClick={() => { props.onslect(props.id) }}>close</span>
        </>
    )
}
export default Smallnote;