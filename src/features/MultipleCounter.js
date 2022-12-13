import React,{useState} from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterSum from './CounterSum';

export default function MultipleCounter() {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);
    const updateSize = (sizeNumber) =>{
        setSize(sizeNumber);
    }
    const updateSum = (newSum)=>{
        setSum(sum + newSum);
    }
    const resetSum = ()=>{
        setSum(0);
    }
    return (
    
    
    <div>
        <CounterSizeGenerator updateSize={updateSize} resetSum={resetSum}/>
        <CounterSum sum={sum}/>
        <CounterGroup size={size} updateSum={updateSum}/>
    </div>
  )
}
