import "./App.css";
// import Header from "./components/header/Header";
import MovieList from "./components/movieList/MovieList";

// https://www.youtube.com/watch?v=wx2dBS3vtFY
// https://www.youtube.com/watch?v=aV2YJuxQ2vo

function App() {
  return (
    <div className="background-color min-h-screen text-color flex flex-col items-center justify-center">
      {/* <Header /> */}
      <MovieList />

      {/* <Carousel /> */}
    </div>
  );
}

export default App;
