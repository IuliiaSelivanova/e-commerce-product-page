import React, { useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/card/Card";

function App() {
  const price = 125.00;
  const [count, setCount] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  const formatCount = () => {
    return count < 0 ? setCount(0) : count;
  }
  const addToCart = () => {
    setIsAddedToCart(true);
  }

  return (
    <div className="app">
      <Header 
        price={price} 
        count={count}
        isAddedToCart={isAddedToCart}
      />
      <Card 
        value={formatCount} 
        newprice={price} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
