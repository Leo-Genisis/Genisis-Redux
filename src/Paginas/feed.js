import React from 'react';
import {connect} from 'react-redux';
import * as CarrinhoAction from '../actions';
import {bindActionCreators} from 'redux';
const Feed = ({produtos, adicionarCarrinho}) => {
    return(
        <section>
            <h3> Feed de produtos</h3>
            {console.log(produtos)}
            <ul>
                {produtos.map((item)=>(
                <li key={item.idserv}>
                    
                    {item.img}|{item.descricao}|{item.preco}|{item.categoria}
                    <button onclick={()=>adicionarCarrinho(item)}>Comprar</button>
                 </li>   
                ))}
                
            </ul>
            
        </section>
    )
}

const mapStateToProps = (state) => ({
    produtos: state.propdutos.produtos,
});

const mapDispatchToProps =(dispatch) => bindActionCreators(CarrinhoAction, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Feed);