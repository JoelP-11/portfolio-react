import React, { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Page from "./components/page";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.css';

function App() {
  const [pages] = useState([
    {
      name: "About me"
    },
    { name: "Portfolio" },
    { name: "contact" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
