import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatAnyworka,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatAnyworka />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
