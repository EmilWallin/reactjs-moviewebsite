import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
//Styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, isHome} ) => (
    <>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' isHome={isHome} />
            </Link>
        ) : (<Image src={image} alt='movie-thumb' />) }

    </>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.string,
    clickable: PropTypes.bool,
    isHome: PropTypes.bool
}

export default Thumb;