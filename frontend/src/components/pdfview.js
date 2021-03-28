import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";


const container = {
  position: "relative",
  backgroundColor: "#b3cdd1",
  backgroundImage: "inear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)"
  
}

const child = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 1%)",
}

export default function Pdfviewer({ url }) {
  const val = `https://cors-anywhere.herokuapp.com/${url}`;
  pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
  const [numPages, setNumPages] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1); 
  

  document.addEventListener("contextmenu", (event) => { 
    event.preventDefault(); 
  }); 
    
  
  function onDocumentLoadSuccess({ numPages }) { 
    setNumPages(numPages); 
    setPageNumber(1); 
  } 
  
  function changePage(offset) { 
    setPageNumber(prevPageNumber => prevPageNumber + offset); 
  } 
  
  function previousPage() { 
    changePage(-1); 
  } 
  
  function nextPage() { 
    changePage(1); 
  } 
    return (
        <div className="App" style={container}>
          <div style={child}>
          <div> 
        <div className="pagec"> 
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'} 
        </div> 
        <div className="buttonc"> 
        <button 
          type="button"
          disabled={pageNumber <= 1} 
          onClick={previousPage} 
          className="Pre"
            
        > 
          Previous 
        </button> 
        <button 
          type="button"
          disabled={pageNumber >= numPages} 
          onClick={nextPage} 
           
        > 
          Next 
        </button> 
        </div>
        </div> 
          <Document
        file={val} 
        onLoadSuccess={onDocumentLoadSuccess} 
      > 
        <Page pageNumber={pageNumber} /> 
      </Document> 

      </div> 
        </div>
      );
}

