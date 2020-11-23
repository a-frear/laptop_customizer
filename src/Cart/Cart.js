import React from 'react';
import CartItem from '../CartItem/CartItem'

function Cart(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        //Component
        return (
          // CartItem needs: featureHash, key, feature, selectedOption, uscurrencyformat
          <CartItem featurehash={featureHash} key={featureHash} feature={feature} selectedOption={selectedOption} uscurrencyformat={props.uscurrencyformat} />
        ); 
    });
    return (   
        <>
            {summary}
        </>
    );
}

export default Cart;