import Song from "./Song";

const Songs = ({ songs }) => {
    return (
        <div>
            {songs.map((song) => (
                <Song key={song.id} song={song} />
            ))}
        </div>
    );
};

export default Songs;
