import Header from "./components/Header"
import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar"

function App() {

    const movies = [
        {
          title: "A Origem",
          rate: 8.8,
          gender: "Ficção Científica",
          directed: "Christopher Nolan"
        },
        {
          title: "Parasita",
          rate: 8.6,
          gender: "Drama / Suspense",
          directed: "Bong Joon-ho"
        },
        {
          title: "O Poderoso Chefão",
          rate: 9.2,
          gender: "Crime / Drama",
          directed: "Francis Ford Coppola"
        },
        {
          title: "Interestelar",
          rate: 8.6,
          gender: "Ficção Científica / Drama",
          directed: "Christopher Nolan"
        },
        {
          title: "A Viagem de Chihiro",
          rate: 8.6,
          gender: "Animação / Fantasia",
          directed: "Hayao Miyazaki"
        }
      ];
      

  return (
    <>
<Header></Header>

<SearchBar></SearchBar>
   
   <MoviesList movies={movies}></MoviesList>

    </>
  )
}

export default App
