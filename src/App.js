import React, { useState } from "react";
import Main from "./Main";

export const FruitContext = React.createContext("");
const App = () => {
  const [fruit, setFruit] = useState("Apple");
  return (
    <>
      <FruitContext.Provider value={[fruit, setFruit]}>
        <Main />
      </FruitContext.Provider>
    </>
  );
};
export default App;
