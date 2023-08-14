import { useState, useEffect} from 'react';
import axios from 'axios';


const API_KEY = 'ROho7BTl1eU7H41SJKE4H4Qs4NGC3EGw'; // API KEY got from GIPHY Developers
const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;// with it we will make API call

function useGif(){
    const [gif, setGif] = useState(''); 
    const [loading, setLoading] = useState('false'); // initially loading screen will not be shown
    const [searchWord, setSearchWord] = useState('car');

    async function fetchData(searchWord){
        setLoading(true); // while fetching data, loading screen will be shown
        
        const searchGifUrl = `${randomGifUrl}&tag=${searchWord}`; // user can search specified GIF with any keyword
        const {data} = await axios.get(searchWord ? searchGifUrl : randomGifUrl); // if user search for GIF then searchGifUrl will be used 
        // If user doesn't put any word in searchbox then random GIF will be generated
        const GIFSource = data.data.images.downsized_large.url; // According to the JSON format this is path to get the GIF
        setGif(GIFSource); // GIF is updated in the UI
        setLoading(false); // loading screen will be hidden
    }

    useEffect(() => {
        fetchData(searchWord); // initially car GIF will be shown
    },[]); // empty array is passed so that it will be called only once

    return {gif, loading,searchWord, setSearchWord, fetchData}; // we are returning these values so that we can use them in other components
}

export default useGif;
