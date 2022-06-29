import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
//In this case, React form has two way to handle form submit
// 1. submitHandler as below, + {/* <form className="form" onSubmit={submitHandler}> */}
// OR
// 2. submitHandler as below, +  {/* <button type="submit" onClick={submitHandler}>Add Person</button> */}

const ControlledInputs = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Hello World");
  };
  return (
    <>
      <article>
        {/* <form className="form" onSubmit={submitHandler}> */}
        <form className="form" onSubmit={submitHandler}>
          {/* React From nomarly has label and input */}
          {/* label should has htmlFor attribute, input need to include id and name attributes */}
          <div className="form-control">
            <label htmlFor="firstname">Name :</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <button type="submit">Add Person</button>
          {/* <button type="submit" onClick={submitHandler}>
            Add Person
          </button> */}
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
