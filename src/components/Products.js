import React from 'react';
import Cart from './Cart';

const Products = ({state, dispatch}) => {
    const { products, cart} = state;
    console.log("products --->", products);

    return (
        <div style={{display: 'flex', justifyContent
        :'space-evenly', width: '80%', flexWrap: 'wrap', padding: '20px'}}>
            {
                products.map((prod) => {
                    return <div style={{padding: '10px', borderWidth: '2px', borderColor : '#021a0226', borderStyle:'solid', marginBottom: '5px'}}>
                        <img src={prod.thumbnail} style={{height: '200px', width: '300px', objectFit:'fill'}}></img>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{display:'flex',flexWrap:'wrap', width:'70%'}}>{prod.title}</div>
                            <div style={{display:'flex',flexWrap:'wrap', width:'30%', flexDirection: 'row-reverse'}}>${prod.price}</div>
                        </div>
                        {
                            cart.some(p => p.id == prod.id) ? 
                            <div style={{paddingTop: '5px'}}>
                                <button style={{width: '100%', backgroundColor: 'red'}}
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_TO_CART",
                                        payload: prod
                                    })
                                }}>Remove From Cart</button></div> :
                            <div style={{paddingTop: '5px'}}>
                                <button style={{width: '100%', backgroundColor: 'green'}} onClick = {() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: {
                                            id : prod.id,
                                            title : prod.title,
                                            price: prod.price,
                                            thumbnail: prod.thumbnail,
                                            qyt: 1
                                        }
                                    })
                                }}>Add To Cart</button></div>
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Products;