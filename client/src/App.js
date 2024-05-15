import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Home from "./component/home/Home";
import Videos from "./component/videos/Videos";
import CreateNewVideo from "./component/newVideo/CreateNewVideo";
import FooterComponent from "./component/footer/FooterComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/create" element={<CreateNewVideo />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
