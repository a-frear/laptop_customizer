import React from 'react';
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartTotal/CartTotal'

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
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <CartTotal uscurrencyformat={props.uscurrencyformat} total={props.total} />
          </section>
    );
}

export default Cart;