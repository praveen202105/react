import axios from "axios";
import React, { useEffect, useState } from "react"



const App=()=>{
  const purple ="#8e44ad"
  const[bg,setBg]=useState(purple);

  const myh1="hello"
  const[oldh1,setH1]=useState(myh1);
  const bgchange=()=>{
  //  console.log("clicked")
    let newbg ="#34495e";
    setBg(newbg);

    let newh1 ="praveen gupta";
    setH1(newh1);
  }; 

  const [degree,mydegree]=useState("");
   const doubleclick=()=>{
    mydegree("Btech CSE");
};

  const[num,getnewnum]=useState(0);
  const increase=()=>{
  let newnum =num+1;
  getnewnum(newnum);
 };  
 const decrease=()=>{
    let newnum =num-1;
    if(newnum<0){
    alert("number cannot be negative");
    }
    else getnewnum(newnum);};
  
        
    const [fulldata,setfulldata] =useState({
      fname:" ",
      branch:"",
      email:"",
      number:"",
    })
  const inputevent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

    const name =event.target.name;
    const value= event.target.value;

    setfulldata((prevalue)=>{
      if(name === "fname"){
        return{
          fname:value,
          branch:prevalue.branch,
          email:prevalue.email,
          number:prevalue.number,
        };
      }else if(name === "branch"){
        return{
          fname:prevalue.fname,
          branch:value,
          email:prevalue.email,
          number:prevalue.number,
        };
      }else if(name === "number"){
        return{
          fname:prevalue.fname,
          branch:prevalue.branch,
          email:prevalue.email,
          number:value,
        };
      }else if(name === "email"){
        return{
          fname:prevalue.fname,
          branch:prevalue.branch,
          email:value,
          number:prevalue.number
        };
      }
    })
  };

const getheading=(event)=>{
  event.preventDefault();
  alert("form submitted")
};

//api calling
const[cityname,setcityname]=useState();
const[city,setcity] =useState();
const[condition,setcondition] =useState();

useEffect(()=>{
  async function getData(){
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f0d9bab52c7aa5c2189aea477a0a52d8`);
    console.log(res.data);
    let ftemp=273;
    let tempk=res.data.main.temp;
const tempincelsius=(tempk-ftemp);
var rounded = Math.round(tempincelsius * 10) / 10;
    setcity(rounded);
   // const tempmmod =arrData[0].weather[0].main;
    setcondition(res.data.weather[0].main);
    setcityname(city)
  }
  getData();
})
  return(
    <>
    
    <div style={{backgroundColor:bg}}>
   
        <h1>{oldh1} {degree}</h1>
      <h2>{num}</h2>
      
      <button onClick={bgchange} onDoubleClick= {doubleclick} >click me</button>
      <br/>
      <button onClick={increase}>+</button>
      <br/>
      <button >-</button>

    <br/>
    <br/> 
    
    <h1>Name: {fulldata.fname}</h1>
    <h2>Branch:{fulldata.branch}</h2>
    <p>E-mail:{fulldata.email}</p>
    <p>Mobile-Number:{fulldata.number}</p>
    <input type="text"  name="fname" placeholder="enter your name" onChange={inputevent}/>
    <input type="text" name="branch" placeholder="enter your branch" onChange={inputevent}/>
    <input type="email" name="email" placeholder="enter your email" onChange={inputevent}/>
    <input type="number" name="number" placeholder="enter your Mobile number" onChange={inputevent}/>
    <button type="submit" onClick={getheading}>click</button>
    <br/><br/><br/><br/><br/>
    <h1>fetch data from api</h1>
         <h2>Temperature:{city}</h2>
   <select
   onChange={(event)=>{
     setcity(event.target.value);
   }}>
     <option value="kanpur">kanpur</option>
     <option value="lucknow">lucknow</option>
     <option value="delhi">delhi</option>
     </select>    
     <br/><br/><br/>
     <h1>
       You choose {cityname}
     </h1>
     <h2>Condition : {condition}</h2>
     <h2>Temperature : {city}</h2>
       
         <br/><br/>
         <h1>React router</h1><br/><br/>
         
            </div>
    </> 
  )
}

export default App;