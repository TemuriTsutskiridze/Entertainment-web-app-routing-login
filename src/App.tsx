import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FullContent from "./components/FullContent";
import Trending from "./components/Trending";

import data from "./data.json";

function App() {
  const [movies, setMovies] = useState<TMovie[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logined") === "true") {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/:filmNav"
          element={
            <FullContent movies={movies}>
              <Trending movies={movies} />
            </FullContent>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
