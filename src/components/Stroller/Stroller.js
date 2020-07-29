import React from 'react';
import  { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styled from "styled-components"
import Form from './Form'
import Navbar from '../Navbar';

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background-color: #ffffff;
    height: 100vh;
    overflow: scroll:
`
const Formcolumn = styled.div`
    background-color: #ffc114;
`
const Main = styled.div`
    padding-left: 50px
`
    






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

      const handleChange = (event) => {
        event.preventDefault()

        setReview(Object.assign({}, review,{[event.target.name]: event.target.value}))
        // console.log("name:", event.target.name, "value:", event.target.value)
        console.log("review:", review)

      }

      const handleSubmit = (event) => {
        event.preventDefault()

        const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
        const ax = axios.create({
          headers: {
            common: {
              'X-CSRF-Token': token.content
            }
          }
        })

        const stroller_id = stroller.data.id
        axios.post('http://localhost:3000/api/v1/reviews', {review, stroller_id})
        .then(resp => {
            const included = [ ...stroller.included, resp.data ]
            setStroller({ ...stroller, included })
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => {})
    }

    return (
  <Wrapper>
      { 
            loaded &&
            <Fragment> 
                <Column>
                    <Main>
                    
                        <Header
                            attributes ={stroller.data.attributes}
                            reviews = {stroller.included}
                        />
                
                    <div className="reviews"></div>
                    </Main>
                </Column>
                <Formcolumn>
                    <Form
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    attributes ={stroller.data.attributes}
                    review = {review}
                    />
                </Formcolumn>
            </Fragment>
     }

  </Wrapper>

        
    );
};

export default Stroller;