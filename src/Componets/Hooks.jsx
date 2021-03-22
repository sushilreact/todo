import React, { useState } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0);

    const Clickme = (e) => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Clickme}>Click Me</button>
        </>
    )
}
export default Hooks;