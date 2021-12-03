import React, {useLayoutEffect, useEffect, useRef} from 'react';

function LayoutEffect(props) {
    
    // useLayoutEffect is very similar to useEffect
    // useLayoutEffect is called before useEffect
    const inputRef = useRef(null);

    // We can use this when we want to change
    // the layout of the UI before the data
    // is called...
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello";
    }, []);

    return (
        <div>
            <h1>Layout Effect</h1>
            <input ref={inputRef} value="HI"/>
        </div>
    );
}

export default LayoutEffect;