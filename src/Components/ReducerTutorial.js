import React, {useReducer} from 'react';

const ReducerTutorial = () => {

    // The useReducer hook is similar to the 
    // useState hook. They are interchangable...
    // The benefit of using the useReducer hook
    // is that we have a single system that collects
    // every state

    // state code
    // const [count, setCount] = useState(0);
    // const [text, setText] = useState(true);

    // we need to make a function that manages our states
    // takes two args: 1) state and 2) action
    // the action is the way of what we are trying to do
    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {count: state.count + 1, show: state.show};
            case "toggleShow":
                return {count: state.count, show: !state.show};
            default:
                return {count: state.count, show: state.show};
        }
    };

    // useReducer example
    // Uses an object
    // syntax is useReducer(reducer function, {init val});
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        show: true,
    });

    return (
        <div>
            <h1>REDUCER Count is {state.count}</h1>
            <button
                onClick={
                    () => {
                        dispatch({type: "INCREMENT"});
                        dispatch({type: "toggleShow"});
                    }
                }
            >Click me!
            </button>
            {state.show && <p>This is the text!</p>}
        </div>
    );
};

export default ReducerTutorial;