import React, { useState } from 'react';

export default function Header(props) {
    const [couter, setCouter] = useState(0);

    function increment() {
        setCouter(couter + 1);
    }
    return (
        <header>
            <h1>{props.title}</h1>
            <h4> Contador: {couter}</h4>
            <button onClick={increment}>Incrementar</button>
        </header>
    );
}
