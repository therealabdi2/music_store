import { FaTimes } from "react-icons/fa";

const Song = ({ song, onDelete, onToggle }) => {
    return (
        <div className={`song ${song.favourite ? "favourite" : ""}`} onDoubleClick={() => onToggle(song.id)}>
            <h3>
                {song.title}
                <FaTimes style={{ color: "#ff726f", cursor: "pointer" }} onClick={() => onDelete(song.id)} />
            </h3>
            <p>{song.artist}</p>
        </div>
    );
};

export default Song;
