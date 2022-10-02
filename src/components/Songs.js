import Song from "./Song";

const Songs = ({ songs, onDelete, onToggle }) => {
    return (
        <div>
            {songs.map((song) => (
                <Song key={song.id} song={song} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default Songs;
