import { createContext, useEffect, useState } from "react";
import Home from "./Home.jsx";
function App() {
  const myname = "VERBANA";

  return (
    <>
      <Home name={myname} />
    </>
  );
}

export default App;
