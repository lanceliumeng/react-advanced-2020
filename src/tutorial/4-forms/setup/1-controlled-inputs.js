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

//another point is when we use state into form input value attribute
//we also need to add onChange event handler for set state update.

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(firstName, email);
    if (firstName && email) {
      // const person = { firstName: firstName, email: email };
      // above one is ok but in ES6 we have shorthand:
      const person = { id: new Date().getTime().toString(), firstName, email };
      //I still perfer use callback and prevState and then add new data into old state
      //I think this way is more safer
      setPeople((prevState) => {
        return [...prevState, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values!");
    }
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
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
          {/* <button type="submit" onClick={submitHandler}>
            Add Person
          </button> */}
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
