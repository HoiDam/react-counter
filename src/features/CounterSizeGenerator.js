import React,{useState,useEffect} from 'react'

export default function CounterSizeGenerator(props) {


    const [size, setSize] = useState(0);
    const {updateSize,resetSum} = props;
    const onSizeChange = (event) =>{
        const inputValue = event.target.value;
        const sizeValue = inputValue.length === 0 ? 0 : parseInt(inputValue);
        setSize(sizeValue);
        updateSize(sizeValue);
    }
    useEffect(() => {
        resetSum();
    }, [size]);
    return (
    <div>
        Size: <input type ="number" name="size" min={0} value={size} onChange={onSizeChange}/>
    </div>
  )
}
