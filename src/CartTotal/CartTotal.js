import React from 'react';
import './CartTotal.css'

export default function CartTotal(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {props.uscurrencyformat.format(props.total)}
            </div>
        </div>
    )
};


