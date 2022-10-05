import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Songs from "./components/Songs";
import AddSong from "./components/AddSong";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
function App() {
    const [showAddSong, setShowAddSong] = useState(false);

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongs = async () => {
            const songsFromServer = await fetchSongs();
            setSongs(songsFromServer);
        };
        getSongs();
    }, []);

    const fetchSongs = async () => {
        const res = await fetch("http://localhost:5000/songs");
        const data = await res.json();
        return data;
    };

    const fetchSong = async (id) => {
        const res = await fetch(`http://localhost:5000/songs/${id}`);
        const data = await res.json();
        return data;
    };

    // Add Song
    const addSong = async (song) => {
        const rating = Math.floor(Math.random() * 5) + 1;

        const res = await fetch("http://localhost:5000/songs", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ ...song, rating }),
        });

        const data = await res.json();
        setSongs([...songs, data]);
    };
    // Delete song
    const deleteSong = async (id) => {
        await fetch(`http://localhost:5000/songs/${id}`, {
            method: "DELETE",
        });

        setSongs(songs.filter((song) => song.id !== id)); // filter out the song with the id that was passed in and set the state to the new array of songs
    };

    // toggle favorite
    const toggleFavorite = async (id) => {
        const songToToggle = await fetchSong(id);
        const updatedSong = { ...songToToggle, favourite: !songToToggle.favourite };

        const res = await fetch(`http://localhost:5000/songs/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedSong),
        });
        const data = await res.json();
        console.log("data", data);

        setSongs(songs.map((song) => (song.id === id ? { ...song, favourite: !data.favourite } : song)));
    };

    return (
        <Router>
            <div className="">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/about" element={<About />} />
                </Routes>
                <div style={{ display: "flex" }}>
                    <div className="">
                        <Header onAdd={() => setShowAddSong(!showAddSong)} showAdd={showAddSong} />
                        {showAddSong && <AddSong onAdd={addSong} />}
                    </div>

                    <div className="container">{songs.length > 0 ? <Songs songs={songs} onDelete={deleteSong} onToggle={toggleFavorite} /> : <p style={{ color: "white" }}>No songs to show</p>}</div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
