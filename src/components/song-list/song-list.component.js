import { Component } from "react";

class SongList extends Component {
    render() {
        return (
            <div>
                {this.props.songs.map((song) => (
                    <div key={song.id}>
                        <h3>{song.title}</h3>
                        <p>{song.artist}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default SongList;
