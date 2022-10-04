import Song from "./Song";

const Songs = ({ songs, onDelete, onToggle }) => {
    return (
        <div>
            {songs.map((song, index) => (
                <Song key={index} song={song} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default Songs;
