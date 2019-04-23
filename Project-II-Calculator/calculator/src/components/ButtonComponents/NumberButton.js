import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={props.buttonProp.buttonStyle}>{props.buttonProp.text}</button>
    );
}

export default NumberButton;