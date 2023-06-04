import React, { useEffect, useState } from 'react'

const Cart = ({state, dispatch}) => {
    const { cart } = state;
    const [total , setTotal] = useState(0);

    const updateQyt = (id, qyt) => {
        dispatch({
            type : "UPDATE_QYT",
            payload : {
                id,
                qyt
            }
        });
    };

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => {
            return acc = acc + Number(curr.price) * curr.qyt;
        },0));
    },[cart]);

  return (
    <div style={{backgroundColor: '#00BCD4', width : '20%'}}>
        <div style={{display: 'flex',justifyContent: 'center', fontSize: '26px', fontWeight:'600'}}>Cart</div>
        <div style={{justifyContent: 'center', display:'flex', fontWeight: '600'}}>Total Amount : $ {total}</div>
        {
            cart.length > 0 ?
            cart.map((car) => {
                return <div style={{borderWidth : '0.5px', borderColor: 'black', borderStyle : 'solid', margin: '10px', borderRadius: '3px', padding: '5px', display: 'flex'}}>
                    <div style={{width: '20%'}}><img src={car.thumbnail} style={{height: '50px', width:'100%'}}></img></div>
                    <div style={{display: 'flex', justifyContent:'space-between', width: '80%'}}>
                        <div style={{marginLeft : '10px'}}>
                            <div>{car.title}</div>
                            <div style={{marginTop : '12px'}}>$ {car.price}</div>
                        </div>
                        <div style={{justifyContent:'center', flexDirection:'column', display: 'flex', width: '30%'}}>
                            <div style={{justifyContent: 'space-between', display: 'flex'}}>
                                <div><button style={{height: '19px', width:'23px'}} onClick={()=>{
                                    updateQyt(car.id, car.qyt + 1)
                                }}>+</button></div>
                                <div>{car.qyt}</div>
                                <div><button style={{height: '19px', width:'23px'}} onClick={()=>{
                                    updateQyt(car.id, car.qyt - 1)
                                }}>-</button></div>
                            </div>
                        </div>
                    </div>
                </div> 
            })
            :
            null
        }
    </div>
  )
}

export default Cart;


