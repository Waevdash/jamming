import React, { Component } from 'react';

let clientId = '3752d707ec8d4097a81ec5f728e8d036'
let redirect_uri = 'http://localhost:3000/'
let accessToken = undefined
let expiresIn = undefined
const Spotify = {
  getAccessToken(){
    if (accessToken){
      return new Promise(resolve => resolve(accessToken));
    } else {
      const spotifyAuthorizationURL = `https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=playlist-modify-public&response_type=token$state=123`
      const accessTokenExist = window.location.href.match('/access_token=([^&]*)/');
      const expiresInExist = window.location.href.match('/expires_in=([^&]*)/');
      if (accessTokenExist && expiresInExist) {
        accessToken = accessTokenExist
        expiresIn = expiresInExist
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
      window.location = spotifyAuthorizationURL
    }
  },
  search(searchTerm){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {return response.json}).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.track.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          URI: track.uri,
        }));
      } else {
        return jsonResponse.tracks.map(track => {[]})
        }
    })
  },
  savePlaylist(playlistName,trackURIs){
    if (playlistName && trackURIs) {
      const accessTokenSave = window.location.href.match('/access_token=([^&]*)/');
      const spotifyAuthorizationURL = `https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=playlist-modify-public&response_type=token$state=123`;
      let userID = undefined;
      let playlistID = undefined;
      return new Promise(fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/me`, {
        headers: {Authorization: `Bearer ${accessToken}`}
      }).then(response => {return response.json}).then(jsonResponse => {
        return (userID = jsonResponse.id)
      }),
      fetch(`https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/users/${userID}/playlists`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
        body: {
          name: {playlistName}
        },
      })).then(response => {return response.json}).then(jsonResponse => {
        return (playlistID = jsonResponse.id)
      })
    } else {return}
    window.location = this.spotifyAuthorizationURL

  }
}

export default Spotify;
