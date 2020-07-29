import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 50px 100px 0;

    img{
        height:350px;
        width:350px
        margin-bottom:10px;
        
    }
    h1{
        font-size: 30px
    
    }

`
const AllReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`
const Total = styled.div`
    font-size:18px;
    font-weight: bold;
    padding: 10px 0
`

const Header = (props) => {
    const {name, image_url, average_score} = props.attributes
    const total = props.reviews.length
    return (
        <>
        <div class="columns ">
            <div className="column ">
            <h1 className="is-size-3 mt-4"><img  src={image_url} alt={name}/> {name}</h1>
            </div>
        </div>
            
                <div class="columns">
                    <div className="column">
                    <p>{total} User Reviews</p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                    <Total>{average_score} out of 5</Total>
                    </div>   
        </div>
        </>
    );
};

export default Header;