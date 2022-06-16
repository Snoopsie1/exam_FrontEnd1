import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { US1, US2} from "./components/UserMethods";
import { US3, US4_Home, US4_Rental, US4_Tenant, US5, US7} from "./components/AdminMethods"

const Home = () => {
  return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Hello Exam!</p>
          <h1>Beklager for manglen af Login!</h1>
        </section>
      </>
  );
};

const User = () => {
  return (
      <>
        <Navbar />
        <section className="hero-section" style={{marginTop: "10em"}}>
          <p>User Metoder!</p>
          <h1>Her sker der lidt magi</h1>
            <US1 />
            <US2 />
        </section>
      </>
  );
};

const Admin = () => {
  return (
      <>
        <Navbar />
        <section className="hero-section" style={{marginTop: "60em"}}>
          <p>Admin Metoder!</p>
          <h1>Her sker der lidt mere magi!</h1>
            <US3 />
            <US4_Home />
            <US4_Rental />
            <US4_Tenant />
            <US5 />
            <US7 />
        </section>
      </>
  );
};

const Contact = () => {
  return (
      <>
        <Navbar />
        <section className="hero-section">
          <h1>For et 12 tal</h1>
          <p>Så giv mig et kald på 20966026 - Eller fang mig i fitten</p>
        </section>
      </>
  );
};

const App = () => {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/user">
          <User />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
  );
};

export default App;