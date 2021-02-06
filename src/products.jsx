import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {useSelector, useDispatch}from 'react-redux';
export default function Products(){

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    console.log(products);

    return(
        <div >
            <h2>Products</h2>
            {products.map(item =>(
                <div key={item.id}>
                    <img src={(`./img/${item.img}`).default} alt="Imagem do produto"/>
                    <p>
                       {item.name} 
                    </p>
                    <p>
                        {item.price}
                    </p>
                    <button onClick={()=> dispatch({type:"ADD_TO_CART", id:item.id})}>
                        Add to cart
                    </button>
                </div>
            ))}

        </div>
    );
};



