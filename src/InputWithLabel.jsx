import React, { useEffect, useRef } from 'react';

const InputWithLabel = (props) => {
    const inputRef = useRef(null);

    useEffect(() => { inputRef.current.focus(); }, []);

    return ( 
        <React.Fragment>
            <label htmlFor={props.id}>{props.children}</label>
            <input 
                id={props.id} 
                type={props.type} 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder}
                ref={inputRef}
            /> 
        </React.Fragment> 
    ); 
};

export default InputWithLabel;
