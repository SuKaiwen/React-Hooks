import React, {useState, createContext} from 'react';
import Login from './Login';
import User from './User';

// We can make a context (collection of states)
// We can pass down our context using
// Context.Provider
// We have to provide a value where it is the 
// values we want to pass
// first we have to export our context then
// import it in the child
export const AppContext = createContext(null);

function ContextTutorial(){
    const [username, setUsername] = useState("");

    // Wrap the application we want to pass our
    // context to using Context.Provider
    // value = stuff we want to pass

    // in the child
    // we first import our context using import...
    // then we do const {stuff} = useContext(myContext);
    // now we can work with the function/value in stuff...
    return (
        <AppContext.Provider value={{username, setUsername}}>
            <h1>useContext</h1>
            <Login/>
            <User/>
        </AppContext.Provider>
    );
}

export default ContextTutorial;