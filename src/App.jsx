import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DisplayNames from "./components/DisplayNames";
import Individual from "./components/Individual";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/display" element={<DisplayNames />}></Route>
          <Route path="/individual/:userId" element={<Individual />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
