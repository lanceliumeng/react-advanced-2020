import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>First: {firstValue}</h1>
      <h1>Second: {secondValue}</h1> */}
      <h3> {text || "default title"}</h3>
      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>
      {isError ? <h1>Error....</h1> : <h1>No Error!</h1>}
    </>
  );
};

export default ShortCircuit;
