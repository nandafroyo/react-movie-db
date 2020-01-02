import React from 'react';
import './HeroImage.css';
import PropTypes from 'prop-types';

const HeroImage = (props) => {
    return(
        <div className="rmdb-heroimage" 
            style={{
                background:
                `linear-gradient(to bottom, rgba(0,0,0,0) 39%,
                rgba(0,0,0,0) 41%,
                rgba(0,0,0,0.65) 100%),
                url('${props.image}'), #1c1c1c`
            }}>
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage;