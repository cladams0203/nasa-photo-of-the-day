// import React from 'react';
import axios from 'axios';

export function Api(setData, setDescription, setTitle, date) {
    if(date === undefined) {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI`)
            .then(
                res => {
                    setData(res.data.url)
                    setDescription(res.data.explanation)
                    setTitle(res.data.title)
                })
            .catch(err => console.log(err))
    
    }else if (date){
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI&date=${date}`)
            .then(
                res => {
                    setData(res.data.url)
                    setDescription(res.data.explanation)
                    setTitle(res.data.title)
                })
            .catch(err => console.log(err))
    }

}
