import React, {useContext} from 'react';
import {AppContext} from './ContextTutorial';

function Login() {

    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <p>Please change name: </p>
            <input 
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
        </div>
    );
}

export default Login;