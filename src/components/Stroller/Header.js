import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const Header = (props) => {
    const {name, image_url, average_score} = props.attributes
    const total = props.reviews.length
    return (
        <div className="wrapper">
            <img src={image_url}/>
            <h1 title is-3>{name}</h1>
            <div>
                <div className="totalReviews">
                    <p is-5>{total} User Reviews</p>
                    </div>
                <div className="rating"></div>
    <div className="totalOf3">{average_score} out of 5</div>
            </div>
            
        </div>
    );
};

export default Header;