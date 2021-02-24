import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './../Styles/Table.css';


export default function DataTable({ data }) {
    // const columns = data[0] && Object.keys(data[0]);
       
    return <Table className = "tbstyles"  striped bordered hover borderless style={{margin: "5% 20%", width: "60%", justifyContent: "center"}}>
        <thead>
            <tr>
            {/* {data[0] && columns.map(heading => <th>{heading}</th>)} */}
                <th>Session ID</th>
                <th>Session Name</th>
                <th> Duration (Min)</th>
            </tr>
        </thead>
        <tbody>
            {data.map((key, index) => 
            <tr key={index}>
            <td>{key.SS_id}</td>
            <Link to={{pathname: `/content`, state:{id: key.SS_id, type: key.SS_Type}}}><td>{key.SS_Name}</td></Link>
            <td>{key.SS_Duration}</td>
            {/* <td>{key.SS_Type}</td> */}
          </tr>
          )}
        </tbody>
    </Table> 
}