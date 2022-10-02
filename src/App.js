import { useState } from "react";
import Header from "./components/Header";
import Songs from "./components/Songs";
import AddSong from "./components/AddSong";

function App() {
    const [showAddSong, setShowAddSong] = useState(false);

    const [songs, setSongs] = useState([
        {
            id: 1,
            title: "The Less I Know The Better",
            artist: "Tame Impala",
            genre: "Rock",
            rating: 4,
            favourite: false,
        },
        {
            id: 2,
            title: "No Scrubs",
            artist: "TLC",
            genre: "R&B",
            rating: 5,
            favourite: false,
        },
        {
            id: 3,
            title: "Macarena",
            artist: "Los Del Rio",
            genre: "Latin",
            rating: 3,
            favourite: false,
        },
        {
            id: 4,
            title: "All Star",
            artist: "Smash Mouth",
            genre: "Rock",
            rating: 2,
            favourite: false,
        },
        {
            id: 5,
            title: "I Want It That Way",
            artist: "Backstreet",
            genre: "Pop",
            rating: 1,
            favourite: false,
        },
    ]);

    // Add Song
    const addSong = (song) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const rating = Math.floor(Math.random() * 5) + 1;
        const favourite = false;
        const newSong = { id, ...song, rating, favourite };
        setSongs([...songs, newSong]);
    };
    // Delete song
    const deleteSong = (id) => {
        setSongs(songs.filter((song) => song.id !== id)); // filter out the song with the id that was passed in and set the state to the new array of songs
    };

    // toggle favorite
    const toggleFavorite = (id) => {
        setSongs(songs.map((song) => (song.id === id ? { ...song, favourite: !song.favourite } : song)));
    };

    return (
        <div className="container">
            <Header onAdd={() => setShowAddSong(!showAddSong)} showAdd={showAddSong} />
            {showAddSong && <AddSong onAdd={addSong} />}
            {songs.length > 0 ? <Songs songs={songs} onDelete={deleteSong} onToggle={toggleFavorite} /> : "No songs to show"}
        </div>
    );
}

export default App;
