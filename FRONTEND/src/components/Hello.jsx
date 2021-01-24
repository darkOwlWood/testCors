import React, { useState } from 'react';
import '../assets/style/components/Hello.scss';

import axios from 'axios';

const Hello = () => {

   const [name, setName] = useState('');
   const [lastName, setLastName] = useState(''); 
   const [dataResult, setDataResult] = useState('');

    const senData = async () => {
        try{
            const resp = await axios.post('https://test-cors-three.vercel.app/test/',{ name, lastName },{ withCredentials:true });
            console.log(resp.data);
            setDataResult(resp.data);
        }catch(err){
            console.error(`=>>${err}`);
        }
    }

    const getCookie = async () => {
        try{
            const resp = await axios.get('https://test-cors-three.vercel.app/test/gookie',{ withCredentials:true });
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
                    <button onClick={senData} >Enviar</button>
                    <button onClick={getCookie}>Ask</button>
                </div>
                <div className="resp">
                    result: { dataResult.name } | { dataResult.lastName }
                </div>
            </div>
        </div>
    );
}

export default Hello;