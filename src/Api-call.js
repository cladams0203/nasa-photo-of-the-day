import React from 'react';
import axios from 'axios';

export function Api(setData) {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setData(res.data.hdurl))
      .catch(err => console.log(err))
}