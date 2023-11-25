import React, { useState } from 'react';

type Results = {
  decile: number;
  tercile: number;
  quartile: number;
};

const CalculationForm = () => {
  const [position, setPosition] = useState('');
  const [total, setTotal] = useState('');
  const [results, setResults] = useState<Results>({ decile: 0, tercile: 0, quartile: 0 });

  const calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pos = parseInt(position);
    const tot = parseInt(total);
    if (pos > 0 && tot > 0) {
      setResults({
        decile: Math.ceil((pos / tot) * 10),
        tercile: Math.ceil((pos / tot) * 3),
        quartile: Math.ceil((pos / tot) * 4),
      });
    }
  };

  return (
    <div className="calculation-form">
      <form onSubmit={calculate}>
        <label>
          Position:
          <input type="number" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </label>
        <label>
          Total:
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} required />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div className="results">
        <p>Decile: {results.decile}</p>
        <p>Tercile: {results.tercile}</p>
        <p>Quartile: {results.quartile}</p>
      </div>
    </div>
  );
};

export default CalculationForm;