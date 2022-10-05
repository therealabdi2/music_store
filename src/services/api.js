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

export { fetchSongs, fetchSong };
