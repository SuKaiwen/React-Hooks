import React, { useState, useImperativeHandle, forwardRef } from 'react';

const ChildButton = forwardRef((props, ref) => {

    // forwardRef allows us to accept
    // a functional component from parent...
    useImperativeHandle(ref, () => ({
        // function that returns an object
        alterToggle(){
            setToggle(!toggle);
        },
    }));

    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button>Button from Child</button>
            {toggle && <p>hi...</p>}
        </div>
    );
});

export default ChildButton;