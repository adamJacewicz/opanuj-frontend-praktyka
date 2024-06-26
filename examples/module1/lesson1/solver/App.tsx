import { useState } from 'react';
import { subtract, add, multiply, divide } from './functions';
import { Button } from './Button';

const App = () => {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculateResult = (func: (a: number, b: number) => number | string) => {
    setResult(func(firstValue, secondValue));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstValue}
          onChange={(e) => setFirstValue(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondValue}
          onChange={(e) => setSecondValue(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(add)}>+</Button>
        <Button onClick={() => calculateResult(subtract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
