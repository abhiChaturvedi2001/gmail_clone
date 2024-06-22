import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Workspace from "./Components/Workspace";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Workspace />
      </div>
    </>
  );
};

export default App;
