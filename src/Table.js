import React, {useState, useEffect} from 'react';
import DataTable from './components';

export default function TableComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://ibm-sprint.herokuapp.com/session')
        .then(res => res.json())
        .then(res => setData(res));
    }, []);

    return(
        <div>
            <DataTable data={data} />
        </div>
    )
}