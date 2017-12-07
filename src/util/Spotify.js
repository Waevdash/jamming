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
      const spotifyURL = `https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=playlist-modify-public&response_type=token$state=123`
      const accessTokenExist = window.location.href.match('/access_token=([^&]*)/');
      const expiresInExist = window.location.href.match('/expires_in=([^&]*)/');
      if (accessTokenExist && expiresInExist) {
        accessToken = accessTokenExist
        expiresIn = expiresInExist
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
      window.location = spotifyURL
    }
  }
}

export default Spotify;
