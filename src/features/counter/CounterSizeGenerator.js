import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { updateSize } from './CounterSlice';

export default function CounterSizeGenerator(props) {


    const [size, setSize] = useState(0);
    const {resetSum} = props;
    const dispatch = useDispatch();

    const onSizeChange = (event) =>{
        const inputValue = event.target.value;
        const sizeValue = inputValue.length === 0 ? 0 : parseInt(inputValue);
        setSize(sizeValue);
        dispatch(updateSize(sizeValue))
        resetSum();
        
    }
    return (
    <div>
        Size: <input type ="number" name="size" min={0} value={size} onChange={onSizeChange}/>
    </div>
  )
}
