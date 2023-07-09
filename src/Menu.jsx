import React from "react";

// Parent Component
const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Menu</h2>
        {/* Conditional Rendering with && */}
        {/* {numPizzas > 0 && (
          <ul className="pizzas">
          {pizzas.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
          </ul>
        )} */}
        {/* Important to add Key when you map over a list or array, unique value*/}

        {/* Conditional Rendering with Ternary Preferred Way*/}
        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious
            </p>

            <ul className="pizzas">
              {pizzas.map((pizza) => {
                return <Pizza pizzaObj={pizza} key={pizza.name} />;
              })}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later</p>
        )}
      </main>
    </>
  );
};

// Child Component
const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
        </div>
        <span>
          {pizzaObj.soldOut
            ? "Sold Out".toUpperCase()
            : `$${pizzaObj.price + 3}`}
        </span>
      </li>
    </>
  );
};

export default Menu;
