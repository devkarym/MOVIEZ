import { useEffect } from "react";
import Header from "./components/Header"
import MoviesList from "./components/MoviesList";
import MoviesSection from "./components/MoviesSection";
import SearchBar from "./components/SearchBar"
import useFetch from "./hooks/useFetch";

function App() {


    



  return (
    <>
<SearchBar></SearchBar>
<Header></Header>
<MoviesSection title={"Now Playing"} section={"now_playing"}/>   
<MoviesSection title={"Popular"} section={"popular"}/>   
<MoviesSection title={"Upcoming"} section={"upcoming"}/>   

    </>
  )
}

export default App
