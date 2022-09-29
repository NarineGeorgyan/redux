import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import UserById from "./pages/UserById";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserById />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
