import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use Effect");
    window.addEventListener("resize", checkSize);
    console.log(size);
    //remeber: everytime when we addEventListener, we need to remove it incase we put too much same event listener in browser
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render", size);
  return (
    <>
      <h1>Window Size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
