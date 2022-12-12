import React,{useState} from 'react'
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'

export default function MultipleCounter() {
    const [size, setSize] = useState(0);
    const updateSize = (sizeNumber) =>{
        setSize(sizeNumber);
    }

    return (
    
    
    <div>
        <CounterSizeGenerator updateSize={updateSize}/>
        <CounterGroup size={size}/>
    </div>
  )
}
