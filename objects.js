var playlist = {artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
     Object.assign({}, { 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi" })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
