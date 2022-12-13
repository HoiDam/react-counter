import React,{useState} from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterSum from './CounterSum';
import { useSelector } from 'react-redux';

export default function MultipleCounter() {
    const [sum, setSum] = useState(0);
    const size = useSelector((state )=> state.counter.size);
    const updateSum = (newSum)=>{
        setSum(sum + newSum);
    }
    const resetSum = ()=>{
        setSum(0);
    }
    return (
    
    
    <div>
        <CounterSizeGenerator resetSum={resetSum}/>
        <CounterSum sum={sum}/>
        <CounterGroup size={size} updateSum={updateSum}/>
    </div>
  )
}
