const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(playlistId) {
    const queryPlaylist = {
      text: `
        SELECT playlists.id, playlists.name 
        FROM playlists
        LEFT JOIN users ON users.id = playlists.owner
        WHERE playlists.id = $1
      `,
      values: [playlistId],
    };

    const resultPlaylistQuery = await this._pool.query(queryPlaylist);

    let playlist = {};
    if (resultPlaylistQuery.rows.length) {
      playlist = resultPlaylistQuery.rows[0];
    }

    const querySongs = {
      text: `
        SELECT songs.id, songs.title, songs.performer 
        FROM songs
        JOIN playlistsongs ON songs.id = playlistsongs.song_id
        WHERE playlistsongs.playlist_id = $1
      `,
      values: [playlistId],
    };

    const resultSongs = await this._pool.query(querySongs);
    if (!resultSongs.rows.length) {
      playlist.songs = [];
    } else {
      playlist.songs = resultSongs.rows;
    }

    return { playlist };
  }
}

module.exports = PlaylistsService;
