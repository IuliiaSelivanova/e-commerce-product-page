import React, { useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  const price = 125.00;
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleIncrement = () => {
    setIsDeleted(false);
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setIsDeleted(false);
    setCount(count - 1);
  }

  const addToCart = () => {
    setIsAddedToCart(true);
    setIsDeleted(false);
    setValue(count);
  }

  const handleDelete = () => {
    setIsDeleted(!isDeleted);
    setCount(0);
    setValue(0);
  }

  return (
    <div className="app">
      <Header 
        price={price} 
        value={value}
        isAddedToCart={isAddedToCart}
        handleDelete={handleDelete}
        isDeleted={isDeleted}
      />
      <Card 
        count={count} 
        newprice={price}
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement}
        addToCart={addToCart}
        isDeleted={isDeleted}
      />
    </div>
  );
}

export default App;
