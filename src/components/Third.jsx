import React from 'react'
import styled from  "styled-components"
import lap from '../assets/lap.png';


const Container=styled.div`
 width: 100%;
margin:0;
padding: 0;
background: rgb(25, 26, 29);
height: 650px;

@media screen and (max-width: 600px){
    width: 100%;
    margin-top: -200px;
    
.main_div .rectangle1{
    margin-left: 30px;
    width: 40px;
    margin-top:-7px;
}
.main_div .rectangle2{
    margin-left: 100px;
    width: 80px;
    margin-top: -4px;
}
    .line {
    width: 100%;
    margin-top: 0px;
}
.main_div{
    width: 100%;
}
.rectangle2 {
    width: 10%;
    height: 1px;
}
.laptop-div img {
    height: 130px;
    width: 130px;
    float: right;
    margin-top: 80px;
}
.offer-content {
    /* display: flex; */
    float: left;
    width: 100%;
    margin-left:0px;
    margin-right: 0px;
}
.offer-content .content1{
    margin-left: 5px;
}
.offer-content .content2{
    margin-left: -47px;
}
.offer-content .content3{
    margin-left: 4px;
}
.offer-content .vector{
    width: 120px;
    height: 120px;
}
.offer-content .content-head{
    font-size: 11px;
    margin-top: 10px;
    margin-left: 0px;
}
.offer-content .content-def{
    font-size:9px;
    margin-top: 15px;
    margin-left:-2px;
}
.content-head {
    font-size: 9.2px;
}
.content-def {
    font-size: 7px;
    margin-top: 10px;
}
.offer-title{
    font-size: 10px;
}
.offer{
    margin-top: -70px;
    width: 100%;
}
.offer .offer-title{
    font-size: 19px;
}
}
.offer{
  width: 100%;
}
.offer-title{ 
  background: linear-gradient(90deg, #FFF 0%, #515151 30%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
/* text-align: center; */
font-family: Atma;
font-size: 60px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 100px;
margin-left: 50px;
}
.offer-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 50px;
}
.content1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 50px 0px 150px;
    text-align: center;
    align-items: center;
}
.content2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
}
.content3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    align-items: center;
    margin: 0px 150px 0px 50px;
}
.vector {
    align-self: center;
}
.content-head {
    text-align: center;
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 130%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
    margin: 40px 10px 0px;
}
.content-def {
    color: rgb(109, 109, 109);
    text-align: center;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 40px 10px 0px;
}
.main_div{
    background-color: rgb(25, 26, 29);
    width: 100%;
}
.line {
    margin-top: 100px;
}
.rectangle1 {
    width: 100px;
    height: 4px;
    background: rgb(99, 231, 218);
    display: flex;
    margin: -9.5px 0px 0px 110px;
    border-radius: 10px;
}
.rectangle2 {
    width: 200px;
    height: 4px;
    background: rgb(99, 231, 218);
    display: flex;
    margin: -1px 0px 0px 300px;
    border-radius: 10px;
}
.laptop-div {
    display: flex;
    float: right;
    transform: rotate(-10.198deg);
    margin-right: 24px;
    margin-top: -150px;
}
`;

const Third = () => {
  return (
    <Container>
       <div className="main_div">
       <svg class="line" width="100%" height="2" viewBox="0 0 3194 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.25" x2="3194.03" y2="1.25" stroke="#63E7DA" stroke-width="1.5"></line></svg>
       <svg class="rectangle1" width="160" height="12" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="160" height="12" rx="6" fill="#63E7DA"></rect></svg>
       <svg class="rectangle2" width="410" height="12" viewBox="0 0 410 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="410" height="12" rx="6" fill="#63E7DA"></rect></svg>
       <div class="laptop-div"><img class="laptop2" src={lap} width="300" height="300"/></div>
        <div className="offer">
        <div class="offer-title">What we Offer ?</div>
        <div className="offer-content">
<div className="content1">
<svg class="vector" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none"><path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path><text x="120" y="220" font-family="cursive" font-size="130" fill="white">1</text></svg>
<div class="content-head">24/7 Customer Support.</div>
<div class="content-def">If you have any queries donot wait, we are here for you 24/7.</div>
</div>
<div class="content2"><svg class="vector" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none"><path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path><text x="120" y="220" font-family="cursive" font-size="130" fill="white">2</text></svg><div class="content-head">Perfection</div><div class="content-def">Perfect Design With Responsive Pages</div></div>
<div class="content3"><svg class="vector" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 290 366" fill="none"><path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"></path><text x="120" y="220" font-family="cursive" font-size="130" fill="white">3</text></svg><div class="content-head">Dedication</div><div class="content-def">Our highly dedicated team ensures the on time completion and delivery of the project.</div></div>
        </div>
        </div>
       </div>
    

    </Container>
  )
}

export default Third