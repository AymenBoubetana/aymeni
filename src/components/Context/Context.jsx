import { createContext, useState } from "react";
import { runChat } from "../runChat";

export const context=createContext()
const ContextProvider=(props)=>{
   const [input,setinput]=useState("");
   const [recenprompt,setrecentpropmpt]=useState("");
   const [prevprompt,setprevprompt]=useState([]);
   const [showresult,setshowresult]=useState(false);
   const [loading,setloading]=useState(false);
   const [resultdata,setresultdata]=useState("");
   const Texteffect=(index,nextword)=>{
    setTimeout(() => {
      setresultdata(prev=>prev+nextword)
    }, 1.5*index);
   }
   const Onsent=async(prompt)=>{
    setresultdata("")
    setloading(true)
    setshowresult(true)
    setrecentpropmpt(prompt)
    if (input!==""){
    setprevprompt(prev=>[...prev,prompt])
    }
    console.log(prevprompt);
    const res=await runChat(prompt);
    let arrayHandle=res.split("**");
    let arrayfinal="";
    for(let i=0;i<arrayHandle.length;i++){
     if(i===0 || i%2!==1){
       arrayfinal +=arrayHandle[i];

     }else{
      arrayfinal+=`<b>${arrayHandle[i]}</b>`
     }
    }
    let fianle=arrayfinal.split("*").join("<br/>");
    //setresultdata(arrayfinal)
    for (let index = 0; index < fianle.length; index++) {
      const element = fianle[index];
      Texteffect(index,element)
      
    }
    console.log()
    setloading(false)
    setinput("")

  }
  const newchat=()=>{
    setloading(false)
    setshowresult(false)
  }
  const contextValue={
        input,
        setinput,
        Onsent,
        prevprompt,
        setprevprompt,
        recenprompt,
        showresult,
        loading,
        resultdata,
        newchat

  }
  return(
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  );

}
export default ContextProvider;