import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Spinner from './spinner';
import './../Styles/Content.css'

const styleObj = {
  fontSize: 30,
  color: "white",
  textAlign: "center",
}

const container = {
  position: "relative",
  backgroundColor: "#b3cdd1",
  backgroundImage: "inear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)"
  
}

const child = {
  background: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, 10%)",
}

function Pdf({url, id}) {
    return (
        <div className="App" style={container}>
          <h4 style={styleObj}>Session {id} PDF </h4>
        <embed src={url} type="application/pdf" width="80%" height="500px" style={child}/>
        </div>
      );
}

function Video ({url, id}) {
    return (
        <div className="App" style={container}>
          <h4 style={styleObj}>Session {id} Video </h4>
          <ReactPlayer url={url} controls style={child}/> 
        </div>
      );
}

export default function Content (props) {
     
     console.log(props)

    const [data, setData] = useState([]);
    const ss_id = props.location.state.id;
    const ctn_type = props.location.state.type;
   useEffect(()=>{
    fetch(`https://ibm-sprint.herokuapp.com/session/content/${ss_id}`)
    .then(res => res.json())
    .then(res => setData(res));
  },1)

    return (
        <div>
            {
                data.length === 0 ? <Spinner /> : 
                ctn_type === 'V' ? <Video url={data[0].CT_ContentLink} id={ss_id}/> :
                <Pdf url={data[0].CT_ContentLink} id={ss_id}/>
            } 
        </div>
    )
}   