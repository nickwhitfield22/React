import { useState } from "react";

const satisfaction = [
  { value: 0, id: "Dissatisfied (0%)" },
  { value: 5, id: "It was okay (5%)" },
  { value: 10, id: "It was good (10%)" },
  { value: 20, id: "Absolutely amazing! (20%)" },
];

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput
        value={bill}
        onChange={(e) => Number(setBill(e.target.value))}
      />
      <SelectPercentage value={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage value={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={+bill} tip={tip} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ value, onChange }) {
  return (
    <label>
      How much was the bill?
      <input value={value} onChange={onChange} />
    </label>
  );
}

function SelectPercentage({ children, value, onSelect }) {
  return (
    <div>
      <label>
        {children}
        <select
          value={value}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          {satisfaction.map((e) => (
            <option key={e.id} value={e.value}>
              {e.id}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h1>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
