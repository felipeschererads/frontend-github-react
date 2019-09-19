import React, { useState } from 'react';
import api from '../../services/api';
import Header from '../../components/header';
import Search from '../../components/search';
import Container from 'react-materialize/lib/Container';

/**Componente estado e propriedade é a base do reac */

export default function Home() {

  const [gitUser] = useState(''); //inicializa ela em branco

  async function handleSubmit(e) {

    e.preventDefault();
    /*
        const response = await api.post('/gituser', {
          username,
        })
    
        const { _id } = response.data;
       // console.log(_id)
    
       // history.push(`/gituser/${_id}`)
       history.push(`/gituser/${_id}`);*/

  }

  return (
  
      <Header/>
   
  );

}

