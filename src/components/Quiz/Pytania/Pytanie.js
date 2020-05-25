import React from 'react';
import PropTypes from "prop-types";


const Pytanie = ({ type, pytanie, odpA, ...props }) => {
    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary d-inline">{pytanie}</h6>
                <a href="#" style={{ float: 'right' }} className="btn btn-danger btn-circle btn-sm d-inline">
                    <i className="fas fa-trash" />
                </a>
            </div>
            <div className="card-body">
                {odpA} <br />
            </div>
        </div>
    );
};

Pytanie.propTypes = {
    pytanie: PropTypes.string.isRequired,
    odpA: PropTypes.string.isRequired,
};


export default Pytanie;