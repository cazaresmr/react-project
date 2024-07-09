import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/films'
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Films
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/films' element={<FilmsPage />} />
          <Route path='/film/:id' element={<SingleFilmPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
