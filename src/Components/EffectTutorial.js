import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial() {

    const [data, setData] = useState("");

    // With useEffect we can run some function
    // immediately after something changes
    // if we want to call a function immediately as
    // the page renders we can do...
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response.data);
            setData(response.data[0].email);
        });
    }, []);

    // Note that changing a state will rerender the page
    // Note that the useEffect will be called twice
    // 1) first when page renders
    // 2) after API call where it rerenders
    // When we want it only to be called once by adding
    // }, []); to the end...

    // If we want to trigger the useEffect
    // everytime after some state changes we can...
    // }, [my state change]);

    // If we leave nothing then it will run
    // on every state change

    return (
        <div>
            <h1>Effects</h1>
            <p>Our data = {data}</p>
        </div>
    );
}

export default EffectTutorial;