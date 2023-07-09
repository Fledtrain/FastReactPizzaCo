import React from "react";

const Header = () => {
  // const style = { color: "red", textTransform: "uppercase" };
  const style = {};
  return (
    <>
      <header className="header">
        <h1 className="header" style={style}>
          Fast React Pizza Co.
        </h1>
      </header>
    </>
  );
};

export default Header;
