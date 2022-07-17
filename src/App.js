import React, {useState} from "react";
import Canvas from "./component/canvas";
import AppContext from "./context/context";
import { initialState } from "./context/state";

function App() {
  const [drawColor, setDrawColor] = useState("#000");
  const [strokeSize, setStrokeSize] = useState(5);

  return (
    <AppContext.Provider
      value={{ drawColor, setDrawColor, strokeSize, setStrokeSize }}
    >
      <Canvas />
    </AppContext.Provider>
  );
}

export default App;
