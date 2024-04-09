import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.scss";
import { runChat } from "../runChat";
import { context } from "../Context/Context";
const Main = () => {
  const {
    input,
    setinput,
    Onsent,
    prevprompt,
    setprevprompt,
    recenprompt,
    setrecenprompt,
    showresult,
    loading,
    resultdata,
  } = useContext(context);
  const handleclick=async (prompt)=>{
    //setrecenprompt(prompt)
    await Onsent(prompt)

  }
  return (
    <div className="Main">
      <div className="header">
        <p>Aymeni</p>
        <img src="aymen.png" alt="" />
      </div>
      {!showresult?
        <div>
        <div className="text">
          <span>Hello, Dev.</span>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div  className="card">
            <p onClick={(e)=>handleclick(e.target.textContent)}>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p onClick={(e)=>handleclick(e.target.textContent)}>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p onClick={(e)=>handleclick(e.target.textContent)}>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p onClick={(e)=>handleclick(e.target.textContent)}>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </div>
    : <div className="result">
       <div className="title">
        <img src="aymen.png" alt="" />
         <p>{recenprompt}</p>
        </div>
        <div className="content">
          <img src={assets.gemini_icon} alt="" />
          {loading? <div className="loader">
            <hr />
            <hr />
            <hr />
          </div> :<p dangerouslySetInnerHTML={{__html:resultdata}} ></p>}
      
          </div>     
         </div>
    }
      <div className="input">
          <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder="Enter asat" />
          <div className="icons">
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>Onsent(input)} src={assets.send_icon} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Main;
