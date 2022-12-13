import './App.css';
import Counter from './features/counter/Counter';
import CounterGroup from './features/counter/CounterGroup';
import MultipleCounter from './features/counter/MultipleCounter';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <MultipleCounter/>
    </div>
  );
}

export default App;
