import { useState } from "react";

const initialMovies = [
  {
    id: 7171282,
    title: "Barbie",
    description:
      "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you're a Ken.",
    image:
      "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/barbie_keyart_0.jpg",
    year: 2023,
  },
  {
    id: 717232282,
    title: "Oppenheimer",
    description:
      "Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it.",
    image:
      "https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg",
    year: 2023,
  },
  {
    id: 717234234,
    title: "The Last Voyage of the Demeter",
    description:
      "Based on a single chilling chapter from Bram Stoker’s classic novel 'Dracula,' 'The Last Voyage of the Demeter' tells the terrifying story of the merchant ship Demeter, which was chartered to carry private cargo—fifty unmarked wooden crates—from Carpathia to London.",
    image:
      "https://movies.universalpictures.com/media/lvd-tsr1sheet8-rgb-1-1-6439ea7191d1d-1.jpg",
    year: 2023,
  },
  {
    id: 42323423,
    title: "Teenage Mutant Ninja Turtles",
    description:
      "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O’Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/Teenage_Mutant_Ninja_Turtles_-_Mutant_Mayhem.jpg",
    year: 2023,
  },
  {
    id: 71423423,
    title: "Blue Beetle",
    description:
      "Mexican-American teenager Jaime Reyes gains super powers when a mysterious scarab binds to his spine and provides him with a powerful suit of blue alien armor.",
    image:
      "https://xl.movieposterdb.com/23_06/2023/9362930/xl_blue-beetle-movie-poster_e6136017.jpg?v=2023-08-12%2009:53:07",
    year: 2023,
  },
  {
    id: 23423235,
    title: "Mission Impossible: Dead Reckoning - Part One",
    description:
      "In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands",
    image:
      "https://xl.movieposterdb.com/23_05/2023/9603212/xl_mission-impossible-dead-reckoning-part-one-movie-poster_5605f4ea.jpg?v=2023-08-10%2002:35:57",
    year: 2023,
  },
];

function Button({ children, onClick }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default function App() {
  const [movies, setMovie] = useState(initialMovies);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleShowAddMovie() {
    setShowAddMovie(!showAddMovie);
  }

  function handleAddMovie(movie) {
    setMovie((movies) => [...movies, movie]);
    setShowAddMovie(false);
  }

  function handleSelection(movie) {
    setSelectedMovie((cur) => (cur?.id === movie?.id ? null : movie));
    setShowAddMovie(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <MovieList
          movies={movies}
          onSelection={handleSelection}
          selectedMovie={selectedMovie}
        />
        {showAddMovie && <FormAddMovie onAddMovie={handleAddMovie} />}
        <Button onClick={handleShowAddMovie}>
          {showAddMovie ? "Close" : "Add Movie"}
        </Button>
      </div>
      {selectedMovie && <FormEditMovie selectedMovie={selectedMovie} />}
    </div>
  );
}

function MovieList({ movies, onSelection, selectedMovie }) {
  return (
    <ul>
      <h1>Movies Currently Out Now</h1>
      {movies.map((movie) => (
        <Movie
          movie={movie}
          key={movie.id}
          onSelection={onSelection}
          selectedMovie={selectedMovie}
        />
      ))}
    </ul>
  );
}

function Movie({ movie, selectedMovie, onSelection }) {
  const isSelected = selectedMovie?.id === movie.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={movie?.image} alt={movie?.title} />
      <h3>{`${movie?.title}(${movie?.year})`}</h3>
      <p>{movie?.description}</p>
      <Button onClick={() => onSelection(movie)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2023);
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !year || !image) return;

    const newMovie = {
      id: Date.now(),
      description,
      title,
      year,
      posterURL:
        "https://xl.movieposterdb.com/23_07/2023/10638522/xl_talk-to-me-movie-poster_336da5ac.jpg?v=2023-08-07%2019:07:39",
    };
    onAddMovie(newMovie);

    setTitle("");
    setDiscription("");
    setYear("");
  }

  return (
    <form className="form-add-movie" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Year</label>
      <input
        type="number"
        min={0}
        placeholder="Year of Release"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>Poster image</label>
      <input
        type="text"
        placeholder="Poster image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormEditMovie({ selectedMovie, onEditMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState(2023);
  const [description, setDiscription] = useState("");
  const [image, setImage] = useState("");

  return (
    <form className="form-edit-movie">
      <h2>Edit {selectedMovie.title}</h2>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Year of Release</label>
      <input
        type="number"
        min={0}
        placeholder="Year of Release"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <label>Poster image</label>
      <input
        type="text"
        placeholder="Poster image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Edit Movie</Button>
    </form>
  );
}
