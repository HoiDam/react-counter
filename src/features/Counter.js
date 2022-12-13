import React,{useState,useEffect} from 'react';


function Counter(props) {
    const [number, setNumber] = useState(0);

    const onIncrease = () => { 
        setNumber(number + 1);
        props.updateSum(1);
    };
    const onDecrease = () => { 
        setNumber(number - 1);
        props.updateSum(-1);
    };
    useEffect(() => {
        setNumber(0);
    }, [props.size  ]);
    return (
        <div>
            <button onClick={onIncrease}>+</button>
            <span>{number}</span>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;
