import React from 'react'
import styled from  "styled-components"
import Nav from './components/Nav';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

import Five from './components/Five';



const Container=styled.div`
width: 100%;
height: 100%;

`;

const Vector = () => {
  return (

    <Container>
           <Nav/>  
           <First/>
           <Second/>
           <Third/>
           
           <Five/>
           
    </Container>
    
  )
}

export default Vector