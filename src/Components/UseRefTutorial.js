import React, {useRef, useState} from 'react';

function UseRefTutorial() {

    // The useRef is the easiest way to
    // manipulate DOM elements...
    // in normal JS it is document.getElementby...

    // An example: we want the browser to focus on
    // our input when we click on it
    // when we use useRef we have to put ref={nameofRef}
    // in our DOM element
    const inputRef = useRef(null);

    const [name, setName] = useState("No-name");

    // We can access the current value using myRef.current.value
    // We can get everything the DOM elem has
    // value is just an example

    // we can set the focus on our value using
    // myRef.current.focus()

    // to clear input we can just set the value to 
    // empty string...

    // We can do things with the value e.g. setName(...)
    const onClick = () => {
        console.log(inputRef.current.value);
        setName(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    };

    return (
        <div>
            <h1>UseRef hook</h1>
            <h3>My name is... {name}</h3>
            <input type = "text" placeholder="example..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default UseRefTutorial;