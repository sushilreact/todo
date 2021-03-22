import React from 'react';
const Card = (props) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card" >

                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.paragraph}</p>
                        <span className="btn btn-primary">{props.btntext}</span>


                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;