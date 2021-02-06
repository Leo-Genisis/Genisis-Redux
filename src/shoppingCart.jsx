import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
//import '/shoppinCart.css'

export default function ShoppingCart(){
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.filter(item =>{
        return item.qty > 0
    }));
    
    const totalQty = useSelector(state => state.cart.reduce((acc, cur)=>acc + cur.qty,0))
    const totalPrice = useSelector(state => state.cart.reduce((acc,cur)=>
    acc + (cur.price * cur.qty)
    ,0))
        return(
            <Navbar className="navCar" bg='dark'expand="lg">
                <Navbar.Brand>
                   <h2>shopping Cart ({totalQty})
                <button onClick={()=> dispatch({type:"CLEAR_CART"})}>
                    Clear Cart
                </button></h2>  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="item-car"/>
                <Navbar.Collapse id="item-car">
                    {cart.map(item =>( 
                <Nav.Item key={item.id}>
                    {item.name}
                    {item.price.toFixed(2)*item.qty}
                
                    <button onClick={()=> dispatch({type:"REMOVE_FROM_CART", id:item.id})}>
                        -
                        </button>
                         {item.qty}
                         <button onClick={()=> dispatch({type:"ADD_TO_CART", id:item.id})}>
                        +
                        </button> 
                </Nav.Item>
    
                     ))}
                   <h4>Total: $ {totalPrice.toFixed(2)}</h4>    
                </Navbar.Collapse>   
                
            </Navbar>
            

                
            
            

    )
}
