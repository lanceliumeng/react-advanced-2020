import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  //My perfer way is alway set fetch function is async function and put it outside useEffect
  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  //in useEffect, we call that async fetch function, but remember, we only need call it once by using [] dependency.
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h3> Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Check Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
