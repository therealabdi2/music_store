import { useState } from "react";

const AddSong = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [favourite, setFavourite] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Please add a song");
        }

        onAdd({ title, artist, genre, favourite });

        setTitle("");
        setArtist("");
        setGenre("");
        setFavourite(false);
    };
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Song</label>
                <input type="text" placeholder="Add Song" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Artist</label>
                <input type="text" placeholder="Artist Name" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Genre</label>
                <input type="text" placeholder="Add Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Mark favorite</label>
                <input type="checkbox" checked={favourite} value={favourite} onChange={(e) => setFavourite(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Song" className="btn btn-block" />
        </form>
    );
};

export default AddSong;
