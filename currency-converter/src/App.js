// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [convertFrom, setConvertFrom] = useState("EUR");
  const [convertTo, setConvertTo] = useState("USD");
  const [output, setOutput] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function convertCurrency() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${convertFrom}&to=${convertTo}`
          );

          if (!res.ok)
            throw Error("Something has gone wrong with fetching data.");

          const data = await res.json();
          console.log(data);
          setOutput(data.rates[convertTo].toFixed(2));
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      if (convertFrom === convertTo) return setOutput(input);
      convertCurrency();
    },
    [output, convertFrom, convertTo, input]
  );

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        min={1}
        disabled={isLoading}
      />
      <select
        value={convertFrom}
        onChange={(e) => setConvertFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={convertTo}
        onChange={(e) => setConvertTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? (
        <p>"Loading..."</p>
      ) : (
        <p>
          {output} {convertTo}
        </p>
      )}
    </div>
  );
}
