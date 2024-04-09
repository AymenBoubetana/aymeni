import React, { useContext, useState } from 'react';
import './Bar.css';
import { assets } from '../../assets/assets'
import { context } from '../Context/Context';
const Bar = () => {
  const [hide,sethide]=useState(true);
  const clickhandle=()=>{
    sethide(prev=>!prev);
  }
  const {Onsent,prevprompt,newchat}=useContext(context);
  const loadprev=async(prompt)=>{
    //setrecentpropmpt(prompt)
    await Onsent(prompt)
  }
  return (
    <div className='Bar'>
      <img onClick={clickhandle} className='bar'  src={assets.menu_icon} alt="" />
  <div className="all">
    <div>
      <div onClick={()=>newchat()} className="chat active">
        <img className='plus' src={assets.plus_icon} alt="" />
        {hide&&<p>New Chat</p>}
      </div>
      {hide&&<p>Recent</p>} 
      <div className='messages'>
      {prevprompt.length >0?prevprompt.map(function(item,index){
       return (<div onClick={()=>loadprev(item)} key={index} className="chat special">
       {hide&&<img src={assets.message_icon} alt="" />}
          {hide&&<p>{item}...</p> }
       </div>);
      }): console.log(prevprompt.length)
       }
     </div>
  </div>    
      <div className="cards">
        <div className="row">
          <img src={assets.question_icon} alt="" />
          {hide&&<p className='help'>Help</p>}
      </div>  
          <div className="row">
          <img src={assets.history_icon} alt="" />
          {hide&&<p>Activity</p>}
        </div>
        <div className="row">
          <img src={assets.setting_icon} alt="" />
          {hide&&<p>Settings</p>}
        </div>
        
      </div>
      </div>
    
    
      
    </div>
  )
}

export default Bar