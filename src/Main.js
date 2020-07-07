import React, { useContext } from "react";
import { FruitContext } from "./App";

const Main = () => {
  const [fruit, setFruit] = useContext(FruitContext);
  return <div>Today's Fruit is {fruit}</div>;
};

export default Main;
