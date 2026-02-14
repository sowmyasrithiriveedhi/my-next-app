"use client";

import { useState } from "react";

export default function Addtwonum() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const sum = Number(num1) + Number(num2);

  return (
    <div className="bg-white p-6 rounded shadow w-80 text-black">
      <h1 className="text-lg font-bold mb-4 text-center">
        Add Two Numbers
      </h1>

      <input
        type="text"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border p-2 w-full mb-3 text-black"
      />

      <input
        type="text"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="border p-2 w-full mb-3 text-black"
      />

      <div className="text-center text-lg font-semibold text-black-600">
        Sum: <span className="text-black">{sum}</span>
      </div>
    </div>
  );
}
