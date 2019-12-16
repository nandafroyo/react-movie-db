import React from 'react';
import './MovieThumb.css';
import { Link } from 'react-router-dom';

const MovieThumb = (props) => {
    return(
        <div className="rmdb-moviethumb">
            {props.clickable ? 
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
                    <img src={props.image} alt="movie-img"/>
                </Link>
                :
                <img src={props.image} alt="movie-img"/>
            }
        </div>
    )
}

export default MovieThumb;