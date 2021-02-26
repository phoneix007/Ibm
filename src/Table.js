import React, {useState, useEffect} from 'react';
import DataTable from './components';

export default function TableComponent(props) {
    
    const [data, setData] = useState([]);
    const SS_id = props.match.params.id 
    useEffect(() => {
        fetch(`https://ibm-sprint.herokuapp.com/session/${SS_id}`)
        .then(res => res.json())
        .then(res => setData(res)).catch(err =>{
            console.log(err)
        });
    }, []);

    return(
        <div>
            <DataTable data={data} />
        </div>
    )
}