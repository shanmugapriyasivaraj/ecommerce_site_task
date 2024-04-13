import "./App.css";
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import route from "../src/providers/route";

function App() {
  let routes = useRoutes(route);
  return (
    <Suspense fallback="loading">
      {" "}
      <div>{routes}</div>
    </Suspense>
  );
}

export default App;
