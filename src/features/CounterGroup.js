import React from 'react'
import Counter from './Counter'

export default function CounterGroup(props) {
    const counterMap = Array(props.size).fill(0);
    return counterMap.map((item,index) =>{
        return <Counter key={index}/>;
    })

}
