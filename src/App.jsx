import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Experiences from "./components/experiences";
import Portifolio from "./components/portifolio";
import Testimonials from "./components/testimonials";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Portifolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
