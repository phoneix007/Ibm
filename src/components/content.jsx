import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Spinner from './spinner';
import PDFviewer from './pdfview';
import './../Styles/Content.css';
import axios from 'axios';


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
    const ss_id = props.match.params.id;
    
   useEffect(()=>{
    axios.get(`https://ibm-sprint.herokuapp.com/session/content/${ss_id}`)
    .then(res => res.data)
    .then(res => setData(res));
  },1)

    return (
        <div>
            {
                data.length === 0 ? <Spinner /> : 
                data[0].CT_Type === 'V' ? <Video url={data[0].CT_ContentLink} id={ss_id}/> :
                <PDFviewer url={data[0].CT_ContentLink} id={ss_id}/>
            } 
        </div>
    )
}