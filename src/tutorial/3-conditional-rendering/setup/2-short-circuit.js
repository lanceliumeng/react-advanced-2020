import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>First: {firstValue}</h1>
      <h1>Second: {secondValue}</h1>
      <h3> {text || "default title"}</h3>
      {text && <h4>this is good!</h4>}
    </>
  );
};

export default ShortCircuit;
