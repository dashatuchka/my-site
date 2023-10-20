import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import DataPlayers from './DataPlayers';
import './Chat.css';

function Second() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '69223c0f0amshe23bf2a6bc0ca31p1924e8jsnf1ab9b8d3b9d',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
        .then(response => response.json())
        .then(response => {
            setPlayers(response.data);
            console.log(response.data)})

        .catch(error => 
            console.error(error));    
    }, [])
    return(
        <>
        <div className='divh1'><h1 className='h1'> Игроки NBA</h1></div>

            <DataPlayers players={players}/>

        </>
    )
}

export default Second