import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styled from "styled-components"
import Form from './Form'
import Navbar from '../Navbar';






const Stroller = (props) => {
    const [stroller, setStroller] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = props.match.params.slug
        const url = `http://localhost:3000/api/v1/strollers/${slug}`
    
        axios.get(url)
        .then( resp => {
          setStroller(resp.data) 
          setLoaded(true)
        })
        .catch( resp => {
          console.log(resp)
        })
      }, [])

    return (
        <>
        <Navbar/>
        <div className= "columns  is-vcentered ">
           
            
            <div className="column is-four-fifths">
                { 
                
                 loaded &&
                <Header 
                    attributes={stroller.data.attributes}
                    reviews={stroller.included}
                />
                }
                </div>
                <div className="columns"></div>
            
           
            <div className ="is-warning">
                <Form/>
            </div>
          
           
        </div>
        </>
    );
};

export default Stroller;