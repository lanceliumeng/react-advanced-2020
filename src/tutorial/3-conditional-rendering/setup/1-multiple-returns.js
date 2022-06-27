import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(!isLoading);
          setIsError(!isError);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setUser(data);
        setIsLoading(!isLoading);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error.....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user.login}</h1>
    </div>
  );
};

export default MultipleReturns;
