import React, { useContext } from "react";
import AppContext from "../context/context";

const Toolbar = () => {
  const { setDrawColor, setStrokeSize } = useContext(AppContext);
  return (
    <>
      <label htmlFor="color" />
      Color
      <input type="color" id="color" onChange={(e) => setDrawColor(e.target.value)} />
      <label />

      <label htmlFor="size" />
      Size
      <input
        type="number"
        id="size"
        onChange={(e) => setStrokeSize(e.target.valueAsNumber)}
      />
      <label/>
    </>
  );
};

export default Toolbar;
