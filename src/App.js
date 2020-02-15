import React from "react";
import Routes from "./routes";

import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
);

export default App;