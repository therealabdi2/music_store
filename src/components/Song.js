import { FaTimes } from "react-icons/fa";

const Song = ({ song, onDelete }) => {
    return (
        <div className="song">
            <h3>
                {song.title}
                <FaTimes style={{ color: "#ff726f", cursor: "pointer" }} onClick={onDelete} />
            </h3>
            <p>{song.artist}</p>
        </div>
    );
};

export default Song;
