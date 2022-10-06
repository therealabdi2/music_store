import { Component } from "react";
import "./song-list.styles.css";
import Song from "../song/song.component";
class SongList extends Component {
  render() {
    return (
      <div>
        {this.props.songs.map(({ id, title, artist }) => (
          <Song
            key={id}
            id={id}
            title={title}
            artist={artist}
          />
        ))}
      </div>
    );
  }
}

export default SongList;
