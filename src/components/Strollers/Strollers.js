import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Stroller from './Stroller'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import SubNav from '../SubNav';
import Navbar from '../Navbar';
import '../../Navbar.css';
import styled from "styled-components"


const Strollers = () => {
    const [strollers, setStrollers] = useState([])
    const apiUrl = "http://localhost:3000/api/v1"

    useEffect( () => {
        // get all the strollers
        //update the state
        axios(`${apiUrl}/strollers`)
        .then( resp => {
            setStrollers(resp.data.data)
        })
        .catch( resp => console.log(resp) )
      }, [strollers.length])
    
    const list = strollers.map(item => {
        return (
            <Stroller
             key={item.attributes.name}
             attributes={item.attributes}
             />
        )
    })
    
    const center = styled.div` 
        display: flex;
        justify-content: center;
        align-items: center;
        `
    

      
    return (
      
        <div className="home">
            <Navbar/>
            <div className="hero">Hero image goes here</div>
            <div className="header">
                <center>
                <SubNav/>
                </center>
            </div>
            <center>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline">
                        {list}
                    </div>
                </div>
            </section>
           
            </center>
        </div>
       
    );
};

export default Strollers;