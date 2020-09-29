import React from 'react';
import './Button.css';

export default props => {
    return(
        <button onClick={e =>props.click && props.click(props.lable)}
        className={`
        button
            
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
    { props.lable } 
        </button >
    )
}