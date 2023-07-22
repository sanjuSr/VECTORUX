import React, { useState } from 'react'
import styled from  "styled-components"

const Container=styled.div`
   background-color:black;
   padding:5px;
   position: relative;

.main_nav{
    background-color:black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.links{
    display: flex;   
}
.link1{
    margin-right:30px;
    font-weight:bold;
    font-size: 20px;
    color:white;
    
}
.logo{
    color: black;
    margin-left:10px;

}
.icon{
    display: none;
    color: white;
}
@media screen and (max-width: 600px) {
.icon{
    display: flex;
    margin-right:20px;
    color: green;
    margin-top: 0px;
}
.side1{
    padding: 10px;  
}
.links{
    display: none; 
}
.side_nav{
    width: 300px;
    height: 100px;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${props=>props.value?"0px":"-300px"});
    transition: all 2s ease;
    display: flex;
  
}
.main_nav{
    height: 35px;
}
}
.side_nav{
    width: 300px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${props=>props.value?"-300px":"0px"});
    transition: all 2s ease;
}

.links_side{
    font-size:20px;
    font-weight:bold;
    margin-top:30px;
    margin-left:10px;
    color: white;
    
}
#link1{
    color: grey;
}

`;

const Nav = () => {

    const[state,setstate]=useState(true);

  return (
   
    <Container value={state}>
    <div className="main_nav">
        <div className="logo">LOGO</div>
            <div className="links">
             <div className="link1" id="link1">HOME</div>
             <div className="link1">ABOUT</div>
             <div className="link1">CONTACT</div>
            </div>
            <div className="icon" onClick={()=>setstate(!state)}> 
            <i class="fa-solid fa-bars" id="bar"></i>
            </div>
    </div>
    <div className="side_nav">  
        <div className="links_side">
             <div className="side1"><i class="fa-solid fa-house"></i>HOME</div>
             <div className="side1"><i class="fa-solid fa-eject"></i>ABOUT</div>
             <div className="side1"><i class="fa-solid fa-address-book"></i>CONTACT</div>

         </div>

    </div>

    </Container>
  )
}

export default Nav