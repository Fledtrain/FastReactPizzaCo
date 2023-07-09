import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We're currently closed! We are happy to welcome you back between{" "}
            {openHour}:00 PM and {closeHour}:00 PM
          </p>
        )}
      </footer>
    </>
  );
};

const Order = ({ closeHour }) => {
  return (
    <>
      <div className="order">
        <p>We're Open until {closeHour}:00 PM. Come visit us or order online</p>
        <button className="btn">Order</button>
      </div>
    </>
  );
};

export default Footer;
