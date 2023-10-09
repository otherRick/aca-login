import axios from 'axios';

export const instance = axios.create({
  // could use a .env file to dinamically change the url based off the environment and hide from remote repository
  baseURL: 'https://api.staging.aca.so'
});
