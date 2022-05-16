import Title from "./components/Title";
// import { useState } from "react";

function App() {
  return (
    <div>
      <Title name="hatchback" />
      <Title name="coupe" type="normal" />
      <Title name="sedan" type="bold" />
    </div>
  );
};

export default App;
