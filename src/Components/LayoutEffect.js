import React, {useLayoutEffect, useEffect} from 'react';

function LayoutEffect(props) {
    
    // useLayoutEffect is very similar to useEffect
    // useLayoutEffect is called before useEffect

    useLayoutEffect(() => {

    });

    useEffect(() => {

    });

    return (
        <div>
            <h1>Layout Effect</h1>
        </div>
    );
}

export default LayoutEffect;