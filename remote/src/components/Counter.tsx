import React, {useState} from 'react'

import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>+1 to Count</button>
        </div>
    )
}
export default Counter