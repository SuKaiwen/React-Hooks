import React, {useState} from 'react';

const StateTutorial = () => {

    // Basic syntax for useState
    // const [x, setX] = useState(initX);
    // In this case it means that counter is initially 0
    const [counter, setCounter] = useState(0);

    // Note: we can't set the value of a state
    //       using x = ...
    // We have to use setX(...) function
    const inc = () => {
        setCounter(counter + 1);
    };

    // Example 2
    // We want to dynamically display a string from input
    const [myString, setMyString] = useState("Hello");

    const onChangeString = (event) => {
        setMyString(event.target.value);
    };

    return (
        <div>
            <p>Our number: {counter}</p>
            <button onClick={inc}>Increment</button>
            <div>
                <input onChange = {onChangeString} placeholder="Type here..." />
                {myString}
            </div>
        </div>
    );
}

export default StateTutorial;