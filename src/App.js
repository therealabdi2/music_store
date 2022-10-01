import { useState } from "react";
import Header from "./components/Header";
import Songs from "./components/Songs";

function App() {
    const [songs, setSongs] = useState([
        {
            id: 1,
            title: "The Less I Know The Better",
            artist: "Tame Impala",
            genre: "Rock",
            rating: 4,
        },
        {
            id: 2,
            title: "No Scrubs",
            artist: "TLC",
            genre: "R&B",
            rating: 5,
        },
        {
            id: 3,
            title: "Macarena",
            artist: "Los Del Rio",
            genre: "Latin",
            rating: 3,
        },
        {
            id: 4,
            title: "All Star",
            artist: "Smash Mouth",
            genre: "Rock",
            rating: 2,
        },
        {
            id: 5,
            title: "I Want It That Way",
            artist: "Backstreet",
            genre: "Pop",
            rating: 1,
        },
    ]);

    return (
        <div className="container">
            <Header />
            <Songs songs={songs} />
        </div>
    );
}

export default App;
