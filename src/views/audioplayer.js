import React, { Component } from "react";
import {
  FaMusic,
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
} from "react-icons/fa";

class Audioplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowplaying: 0,
      track: 0,
      songs: [
        {
          title: "South Park",
          id: "south-park",
          author: "Kyle",
          url:
            "https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3",
        },
      ],
    };
  }
  componentDidMount() {
    // this.pauseButton.style.display = "none";
    fetch("https://assets.breatheco.de/apis/sound/songs")
      .then((response) => response.json())
      .then((songs) => this.setState({ songs }));
  }
  // changeTrack(i) {
  //     this.setState({ currentIndex: i });
  //     this.audio.current.pause();
  //     this.audio.current.load();
  //     this.audio.current.play();
  // }
  play = (i) => {
    var url = this.state.songs[i].url;
    const songUrl = "https://assets.breatheco.de/apis/sound/" + url;
    this.audio.src = songUrl;
    this.audio.play();
    //   this.playButton.style.display = "none";
    //   this.pauseButton.style.display = "inline-block";
    this.setState({ track: i });
  };
  pause = () => {
    this.audio.pause();
    //     this.playButton.style.display = "inline-block";
    //     this.pauseButton.style.display = "none";
  };

  render() {
    const playlist = this.state.songs.map((song, index) => {
      return (
        <li className="track" key={index} onClick={() => this.play(index)}>
          <FaMusic color="#70a1ff" />
          &nbsp;&nbsp;
          {`${index + 1}   ${song.name} `}
        </li>
      );
    });

    return (
      <div className="container">
        <div>
          <h2>Awesome Audio Player</h2>
          <h4>
            {this.state.track === 0
              ? "Nothing Playing Now"
              : `Now Playing . . . ${this.state.songs[this.state.track].name}`}
          </h4>
        </div>
        <div>
          <ul>{playlist}</ul>
        </div>
        <div>
          <audio ref={(element) => (this.audio = element)} />
        </div>
        <div>
          <FaBackward color="#5352ed" size="1.5rem" />
          &nbsp;&nbsp;&nbsp;
          <FaPlay
            ref={(element) => (this.playButton = element)}
            onClick={() => this.play(this.state.track)}
            color="#5352ed"
            size="1.5rem"
          />
          &nbsp;&nbsp;
          <FaPause
            ref={(element) => (this.pauseButton = element)}
            onClick={() => this.pause(this.state.currentIndex)}
            color="#5352ed"
            size="1.5rem"
          />
          &nbsp;&nbsp;&nbsp;
          <FaForward color="#5352ed" size="1.5rem" />
        </div>
      </div>
    );
  }
}
export default Audioplayer;
