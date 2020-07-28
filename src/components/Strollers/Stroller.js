import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 30px 0 20px 0
    height: 50px

    a {
        color: #000000;
        background-color: #ffc114;
        border-radius: 4px;
        padding: 20px 50px;
        border: 1px solid #ffc114;
        width: 100%;
        text-decoration: none;
    }
`

const Stroller = (props) => {
    const { image_url, slug, average_score} = props.attributes

    return (
    
        <div className="column is-one-third">
            <div className="stroller-image">
                <img src={image_url} alt={props.attributes.name} width="250" />
            </div>
            <div className="stroller-name">
                {props.attributes.name}
            </div>
            <div className="stroller-score">
                {average_score}
            </div>
            <div className="wrapper">
            <Link to={`/strollers/${slug}`}><button class="button is-warning">View Stroller Review</button></Link> 
            </div>
           
             
        </div>
    );
};

export default Stroller;