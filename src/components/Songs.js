import Song from "./Song";

const Songs = ({ songs, onDelete }) => {
    return (
        <div>
            {songs.map((song) => (
                <Song key={song.id} song={song} onDelete={() => onDelete(song.id)} />
            ))}
        </div>
    );
};

export default Songs;
