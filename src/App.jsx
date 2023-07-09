import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default App;
