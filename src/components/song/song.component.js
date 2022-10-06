import { Component } from "react";
import "./song.styles.css";

class Song extends Component {
  render() {
    const { id, title, artist } = this.props;
    return (
      <div
        className="song-container"
        key={id}
      >
        <img
          alt={`song ${title}`}
          src={`https://robohash.org/${id}?set=set3&size=180x180`}
        />
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
    );
  }
}

export default Song;
