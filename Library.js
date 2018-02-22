const Playlist = require('./Playlist.js');
const Track = require('./Track.js');

class Library {

  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

}

const library = new Library('Test', 'Taylor');
const Numb = new Track('Numb', 4, 186);
const FearofTheDark = new Track('Fear of the Dark', 5, 438);
const ThePretender = new Track('The Pretender', 4, 280);

const Rock = new Playlist('Rock');

Rock.addTrack(Numb);
Rock.addTrack(FearofTheDark);
Rock.addTrack(ThePretender);

library.addPlaylist(Rock);

console.log(1, library);
console.log(2, library.playlists)
console.log(3, library.playlists[0]);



