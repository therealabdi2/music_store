import { FaTimes } from "react-icons/fa";

const Song = ({ song, onDelete, onToggle }) => {
    return (
        <tr className={`song ${song.favourite ? "favourite" : ""}`} onDoubleClick={() => onToggle(song.id)}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>{song.rating}</td>
            <td>{song.favourite ? "Yes" : "No"}</td>
            <td>
                <FaTimes style={{ color: "#ff726f", cursor: "pointer" }} onClick={() => onDelete(song.id)} />
            </td>
        </tr>
    );
};

export default Song;
