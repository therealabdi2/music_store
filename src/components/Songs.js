import Song from "./Song";

const Songs = ({ songs, onDelete, onToggle }) => {
    return (
        <table style={{ color: "white" }}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Favourite</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song) => (
                    <Song key={song.id} song={song} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </tbody>
        </table>
    );
};

export default Songs;
