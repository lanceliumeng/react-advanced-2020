import React, { useState, useEffect } from "react";
// Note:
// => by default(no dependency []) runs after every re-render
// => second parameter:
//1. dependency is [], useEffect only run on the initial render
//2. dependency is [xxx,xxx], useEffect only run on xxx changed
// => just like useState, useEffect can be used as much times as we want in one component.

const UseEffectBasics = () => {
  const [count, SetCount] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (count >= 1) {
      document.title = `${count}`;
    }
  }, [count]);
  useEffect(() => {
    console.log("the second useEffect just call once");
  }, []);
  console.log("render component");
  const btnClickHandler = () => SetCount((prevCount) => prevCount + 1);
  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={btnClickHandler}>
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
