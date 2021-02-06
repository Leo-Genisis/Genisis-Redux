import React from 'react';
import { Container } from 'react-bootstrap';
import {Provider} from 'react-redux'
import Products from '../products';
import ShoppingCart from '../shoppingCart';
import store from  '../redux/store';
import './Produtos.css';
 console.log(store.getState())
export default function Produtos(){
    return(
        <Provider store={store}>
            <ShoppingCart />
            <Container fluid className="produtos">
                <Products />
            </Container>

        </Provider>
        
    )
    
}
  

