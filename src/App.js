import './App.css';
import MoviesList from './pages/moviesList';
import { Navigate, Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/movieDetail';
import FavoriteMovieContextProvider from './context/favoriteMovieContextProvider';
import MovieContextProvider from "./context/movieContextProvider";
import FavoriteList from './pages/favoriteList';
import NavBar from './pages/navBar';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <FavoriteMovieContextProvider>
          <NavBar />
          <Routes>
            <Route path="/Home" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/favoriteList" element={<FavoriteList />} />
            <Route path="/*" element={<Navigate to="/Home" />} />
          </Routes>
        </FavoriteMovieContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
