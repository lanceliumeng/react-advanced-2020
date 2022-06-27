import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    //in this case, because we toggle Item component, so only add [] denpendency is still add duplicate event listener in browser
    //because everytime we re-render the toggle component Item, it will add event listener
    //Therefore, in this case, we add removeEventListener to clean up the duplicate event listeners
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>Size : {size} </h2>
    </div>
  );
};

export default ShowHide;
