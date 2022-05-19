import { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const [isOpenedTitle, setOpened] = useState(false);

  const showTitle = () => {
    setOpened(true);
  };

  if (isOpenedTitle === true) {
    return(
      <div>
        <Title name="sedan" type="bold" />
      </div>
    )
  };

  return (
    <div>
      <button onClick={showTitle}>Open title</button>
    </div>
  )
};

export default App;

// function App() {
//   return (
//     <div>
//       <Title name="hatchback" />
//       <Title name="coupe" type="normal" />
//       <Title name="sedan" type="bold" />
//     </div>
//   );
// };
