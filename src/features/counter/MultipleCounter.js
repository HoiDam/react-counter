import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterSum from './CounterSum';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {setSum} from './CounterSlice';

export default function MultipleCounter() {
    const size = useSelector((state )=> state.counter.size);
    const sum = useSelector((state )=> state.counter.sum);
    const dispatch = useDispatch();
    const updateSum = (newSum)=>{
        // setSum(sum + newSum);
        dispatch(setSum(sum + newSum));
    }
    const resetSum = ()=>{
        // setSum(0);
        dispatch(setSum(0));
    }
    return (
    
    
    <div>
        <CounterSizeGenerator resetSum={resetSum}/>
        <CounterSum sum={sum}/>
        <CounterGroup size={size} updateSum={updateSum}/>
    </div>
  )
}
