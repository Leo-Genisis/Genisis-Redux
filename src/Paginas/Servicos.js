import React from 'react';
import{ useState, useEffect, lazy, Suspense} from 'react';
import {Container, Row} from 'react-bootstrap';
//import store from '../store';


import Categorias from '../Components/Servico/categoria';
import './Servicos.css';
const Servico = lazy(() => import('../Components/Servico/index'));

export default function Servicos(){

    //console.log(store.getState);
   
    const [servicos, setServicos] = useState([]);

    useEffect( () => {
            async function fetchData(){
                const resposta = await fetch("http://localhost:3002/servicos")
                const dados = await resposta.json()
                console.log(dados)
                setServicos(dados);
            }
            fetchData();
    }, []);

    return(
        
        <Container fluid className="servicos">

            <Row>
             <h1>Servicos</h1>
            </Row>
            <Row >
             < Categorias />
            </Row>     
           <Row>
               <Suspense fallback={<p>Carregando...</p>}>
                 {servicos && servicos.map(item => <Servico key={item.idserv} img={item.img} nome={item.descricao} preco={item.preco} categoria={item.desenvolvimento} />)}   
               </Suspense>
             
           </Row>
        </Container>
        
    );
}
