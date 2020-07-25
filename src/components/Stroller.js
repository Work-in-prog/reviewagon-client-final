import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Stroller = (props) => {
    const {name, image_url, slug, average_score} = props.attributes

    return (
    
        <div className="column is-one-third">
            <div className="stroller-image">
                <img src={image_url} alt={name} width="250" />
            </div>
            <div className="stroller-name">
                {name}
            </div>
            <div className="stroller-score">
                {average_score}
            </div>

            <div className="wrapper">
                <Link to={`/strollers/${slug}`}> View Stroller Review</Link>
            </div>
            This is the stroller show page
        </div>
    );
};

export default Stroller;