import React from 'react';
import ReactDOM from 'react-dom';
//import Card from "./Cards";
import "./index.css";
//import Sdata from "./Sdata";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

// function ncard(val){
//   return(
//     <Card
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     limk={val.val.limk}
//   />)
// }

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root")
);
