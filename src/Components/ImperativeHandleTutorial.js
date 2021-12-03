import React, {useRef} from 'react';
import ChildButton from './ChildButton';

function ImperativeHandleTutorial(props) {

    // We can use this for altering children
    // components from the outside
    // We can do this by using the button as a reference
    // and use this reference to call functions 
    // that exists inside child
    const buttonRef = useRef(null);

    return (
        <div>
            <h1>Imperative handle</h1>
            <button onClick={() => {buttonRef.current.alterToggle();}}>Button from Parent</button>
            <ChildButton ref={buttonRef}/>
        </div>
    );
}

export default ImperativeHandleTutorial;