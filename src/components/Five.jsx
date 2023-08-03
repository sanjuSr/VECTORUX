import React from 'react'
import styled from  "styled-components"
import vector from '../assets/vector.png';



const Container=styled.div`
width: 100%;
height: 800px;
background: #191A1D;
overflow: hidden;
.main_div{
    display: flex;
}
.div1{
   
    width: 50%;
    height: 500px;
    display: flex;
}
.div2{
    width: 50%;
    height: 500px;
}
.v3{
    margin-top: 230px;
    width: 100px;
    margin-left:-15px;
}
.v1{
    margin-top: 100px;
    width: 100px;
    margin-left:200px;
}
.v2{
    margin-top: 90px;
    width: 100px;
    margin-left:-35px;
}
.one{
    margin-top:144px;
    margin-left:-300px;
}
.two{
    margin-top: 180px;
    margin-left: -350px;
}
.h1{
    margin-top:200px;
   margin-left:-300px ;
   color: #FFF;
font-family: Lato;
font-size: 70px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-top: 180px;
margin-left:-450px;
}
.h3{
    color: #FFF;
font-family: Lato;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: -60px;
margin-left: -390px;
}
.three{
    width: 400px;
    margin-left:-450px;
    margin-top: 380px;
    height: 100px;
}
.four{
    width: 150px;
    margin-top: 380px;
    margin-left: -40px;
    height: 100px;
}
.txt{
    color: rgba(255, 255, 255, 0.52);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: normal; 
margin-left:-510px;
margin-top: 410px;
}
.txt1{
    color: #FFF;
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: -140px;
margin-top: 410px;
}
.txt3{
    color: #FFF;
font-family: Montserrat;
font-size: 65px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 100px;
}
.span{
    color: #63E7DA;
    font-style: italic;
    font-family: Satisfy;
}
.txt4{
    color: #D9D9D9;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 100px;
margin-right: 100px;
}
.txt5{
    color: #63E7DA;
font-family: Montserrat;
font-size: 45px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 100px;
}
.txt6{
    color: #FFF;
font-family: Montserrat;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 600px;
margin-top:200px;
}
.span1{
    color: #63E7DA;
font-family: Satisfy;
font-size: 40px;
font-style: italic;
font-weight: 400;
line-height: normal;
}
@media (max-width: 768px) {
    .v1{
        margin-left: 10px;
    }
    .h1 {
      font-size: 40px;
      margin-left: -350px;
      margin-top: 200px;
    }

    .h3 {
      font-size: 20px;
      margin-left: -350px;
      margin-top: -30px;
    }
.three{
    width: 190px;
    margin-left:-350px;
    margin-top: 320px;
}
    .txt {
      font-size: 20px;
      margin-left: -330px;
      margin-top: 359px;
    }
    .four{
        width: 80px;
    margin-left:-150px;
    margin-top: 320px;
    }
    .txt1 {
      font-size: 20px;
      margin-left: -130px;
      margin-top: 359px;
    }

    .txt3 {
      font-size: 30px;
      margin-left: 0px;
      margin-top:100px;
      margin-left: 15px;
    }

    .txt4 {
      font-size: 20px;
      margin-top: 30px;
      margin-right: 50px;
      margin-left: 15px;
    }
    .txt5 {
      font-size: 25px;
      margin-top: 50px;
      margin-left: 15px;
    }

    .txt6 {
      font-size: 30px;
      margin-left: 160px;
      margin-top: 100px;
    }
  }

.div1 img{
    margin-top:50px;
    margin-left: 150px;
    width: 350px;
    height: 350px;
}
.div17 .three{
    margin-top: 500px;
}
.msg {
   
    padding-left: 10px;
    margin: 20px 0px 0px 80px;
    fill: none;
    border-width: 0.1px;
    outline: none;
    border-color: white;
    border-radius: 15px 15px 0px;
    background-color: rgb(25, 26, 29);
    color: white;
}
.div18 .msg{
    width: 350px;
    height: 40px;
    margin-top: 470px;
    margin-left: -370px;
}
.div18 .button {
    margin-left: 15px;
    background-color: rgb(99, 231, 218);
    border-radius: 10px 10px 10px 0px;
    outline: none;
    border: none;
    height: 40px;
    width: 90px;
    color: white;
}
@media (max-width: 600px) {
    width: 100%;
height: 570px;

background: #191A1D;

    margin-top: -230px;
    .main_div{
        width: 50%;
    }
    .div2{
        margin-left:100px ;
        
    }
    .div1{
        width: 50%;
    }
.div23 .txt5{
    margin-left: -100px;
    
}
.div1 .pic{
    width: 180px;
    height: 180px;
    margin-left: 100px;
    
}
.div18 .msg{
    width: 100px;
    height: 20px;
    margin-left: -170px;
    margin-top: 250px;
}
.div18 .button{
    width: 39px;
    height: 20px;
}
.div21 .txt3{
    width: 300px;
    margin-left: -130px;
    font-size: 20px;
    margin-top: 300px;
  }
.div22 .txt4{
    font-size: 15px;
    width: 350px;
    height: 50px;
    margin-left: -180px;
    margin-top: 20px;
}
.div23 .txt5{
    font-size: 15px;
    margin-left: -180px;
    margin-top: 20px;
}
.div100 .txt6{
    width: 1020px;
    margin-top: -50px;
    font-size: 15px;
    margin-left:20px;
    margin-top: 0px;
}
/* .div100{
    background-color: red;
} */
.div100 .span1{
    font-size: 20px;
    margin-left:0px;
}
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    width: 100%;
height: 920px;

    margin-top: -230px;
    .main_div{
        width: 50%;
    }
    .div2{
        margin-left:100px ;
        
    }
    .div1{
        width: 50%;
    }
.div23 .txt5{
    margin-left: -100px;
    
}
.div1 .pic{
    width: 300px;
    height: 300px;
    margin-left: 350px;
    
}
.div18 .msg{
    width: 230px;
    height: 30px;
    margin-left: -300px;
    margin-top: 370px;
}
.div18 .button{
    width: 50px;
    height: 30px;
}

.div21 .txt3{
    width: 500px;
    margin-left: -300px;
    font-size: 40px;
    margin-top: 500px;
  }
  
.div22 .txt4{
    font-size: 30px;
    width: 800px;
    height: 50px;
    margin-left: -300px;
    margin-top: 40px;
}
.div23 .txt5{
    font-size: 30px;
    margin-left: -300px;
    margin-top: 60px;
}

.div100 .txt6{
    width: 300px;
    margin-top: -50px;
    font-size: 30px;
    margin-left:600px;
    margin-top: 350px;
}
.div100 .span1{
    font-size: 30px;
    margin-left:0px;
}
   
  }
`;
const Five = () => {
  return (
    <Container>
        <div className="main_div">
            <div className="div1">
            <img className="pic" src={vector} alt=""/>


<div className="div18"><input type="text" class="msg" placeholder="write a message"/>
<button className='button'>send</button></div>


            </div>
            <div className="div2">
        <div className="div21"><h1 className='txt3'>Let's <span className='span'>talk</span> something special.</h1></div>
<div className="div22"><h1 className='txt4'>We seek to push the limitations of creativity to create high-engaging, user-friendly and memorable interactive experiences.</h1></div>
        
<div className="div23"><h1 className='txt5'>vectorux0@gmail.com</h1></div></div>

        </div>
        <div className="div100"><h1 className='txt6'>Let’s <span className='span1'>connect</span> there</h1></div>
       
    </Container>
  )
}

export default Five