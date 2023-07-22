import React from 'react'
import styled from  "styled-components"



const Container=styled.div`
width: 100%;
height: 450px;
background: #191A1D;
.main_div1{

  display: flex;
  justify-content: space-between;
  margin-left: 150px;
  margin-right: 150px;
  
}
.one,.two,.three{
  height: 200px;
  width: 200px;
}
.txt1{
  margin-top: -210px;
}
.txt2{
  margin-top: -210px;
}
.txt3{
  margin-top: -210px;
}
.h1{
  color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.main_div2{
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
}
.h2{
  text-align: center;
font-family: Montserrat;
font-size: 44px;
font-style: normal;
font-weight: 500;
line-height: normal;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
#h{
  margin-left:-400px;
}
.h4{
  color: #6D6D6D;
text-align: center;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
@media screen and (max-width: 600px) {
.main_div1{
  width: 100%;
  margin-left:0px;
  margin-right:10px;
  background-color: green;
}
.main_div2{
  width: 100%;
  margin-left: 0px;
  justify-content: space-between;
  background-color: red;
  margin-left:15px;
}  

.h2{
  font-size: 30px;
}
.div22{
  margin-left: 200px;
}
.div21{
  width: 100;
}
}
@media (max-width: 768px) {
background: #191A1D;

    .main_div1 {
      justify-content: center;
      width: 100%;
    margin-left:0px;
     margin-right:0px;
    /* background-color: green; */
    height: 150px;
background: #191A1D;

    }
    .div1,.div2,.div3{
      width: 100%;
      margin-left: 10px;
      margin-right: 10px;
      margin-top:-4px;
background: #191A1D;

    }
    .main_div2{
      width: 100%;
      height: 150px;
      margin-left: 0;
background: #191A1D;

      /* background-color: red; */
    }
    .div21,.div22,.div23{
      width: 100%;
      /* background-color: blue; */
      margin-left: 10px;
      margin-right: 10px;
    }
    .h1 {
      font-size: 40px;
      margin-top: 100px;
      margin-left:-20px;
    }
    
    .h2 {
      font-size: 20px;
      margin-top: 10px;
    }
    #h{
      margin-left: -30px;
      margin-top: 30px;
    }
    
    
    .h4 {
      font-size: 18px;
    }
    .one,.two,.three{
      width: 150px;
      height: 150px;
    }
  }
  @media screen and (max-width: 600px) {
    .h1{
      margin-left: 0;
    }
    .one,.two,.three{
      margin-right: -100px;
    }
  }
`;
const Four = () => {
  return (
    <Container>
        <div className="main_div1">
            <div className="div1"><svg className='one' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
<path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className="txt1"><h1 className='h1'>1</h1></div></div>

            <div className="div2"><svg className='two' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
<path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className="txt2"><h1 className='h1'>2</h1></div></div>

            <div className="div3"><svg className='three' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
<path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
</svg><div className="txt3"><h1 className='h1'>3</h1></div></div>
        </div>

        <div className="main_div2">
            <div className="div21">
              <h1 className='h2'> 24/7 Customer Support.</h1>
              <h3 className='h4'>If you have any queries <br/> don’t wait, we are here for <br/>you 24/7 .</h3>
            </div>
            <div className="div22">
              <h1 className='h2' id="h">Perfection</h1>
              <h3 className='h4' id='h'>Perfect Design With<br/> Responsive Pages</h3>
            </div>
            <div className="div23">
              <h1 className='h2' id="h">Dedication</h1>
              <h3 className='h4' id='h'>Our highly dedicated team<br/> ensures the on time completion <br/>and delivery of the project.</h3>
            </div>

        </div>
        
    </Container>
  )
}

export default Four