import React, { useState } from 'react';
import '../assets/style/components/Hello.scss';

import axios from 'axios';

const Hello = () => {

   const [name, setName] = useState('');
   const [lastName, setLastName] = useState(''); 
   const [dataResult, setDataResult] = useState('');

    const handleClick = async () => {
        try{
            const resp = await axios.post('http://localhost:8088/test/',{ name, lastName },{ withCredentials:true });
            console.log(resp.data);
            setDataResult(resp.data);
        }catch(err){
            console.error(`=>>${err}`);
        }
    }

    return (
        <div className="hello">
            <div className="container">
                <div className="form">
                    <input type="text" onChange={(event) => setName(event.target.value)}/>
                    <input type="text" onChange={(event) => setLastName(event.target.value)}/>
                    <button onClick={handleClick} >Enviar</button>
                </div>
                <div className="resp">
                    result: { dataResult.name } | { dataResult.lastName }
                </div>
            </div>
        </div>
    );
}

export default Hello;