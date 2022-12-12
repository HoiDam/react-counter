import './App.css';
import Counter from './features/Counter';
import CounterGroup from './features/CounterGroup';
import MultipleCounter from './features/MultipleCounter';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <MultipleCounter/>
    </div>
  );
}

export default App;
