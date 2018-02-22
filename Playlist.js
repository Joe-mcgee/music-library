const Track = require('./Track.js');
class Playlist {

  constructor(name) {
    this.name = name;
    this.tracks = [];

  }

  overallRating() {
    let ratingSum = 0;
    let number = 0;
    for (const track of this.tracks) {
      ratingSum += track.rating;
      number += 1;
    }
    const average = ratingSum / number;
    return average;
  }

  totalDuration() {
    let length = 0;
    for (const track of this.tracks) {
      length += track.length;
    }
  }

  addTrack(track) {
    this.tracks.push(track);
  }

}

module.exports = Playlist;
