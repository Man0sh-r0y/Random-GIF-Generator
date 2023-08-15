import Spinner from './Spinner';
import useGif from '../hooks/useGif';


function SearchGIF(){

    const {gif, loading,searchWord, setSearchWord, fetchData} = useGif();

    function changeHandler(event){
        setSearchWord(event.target.value);
    }

    return(
        <div className='w-1/2  srch-gif-bg rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='gif-heading mt-[15px] text-2xl underline uppercase font-bold'>
                Random {searchWord} Gif
            </h1>

            {
                loading ? (<Spinner/>) : <img src={gif} width="450" className='gif-box border-double border-8 border-black'/>
            }
            {/* If loading is true then show the Spinner otherwise Show the GIF */}

            <input className='search-bar w-8/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                placeholder="Search GIF here" 
                onChange={changeHandler} />

            <button className="button w-7/12 bg-yellow-500 text-lg  rounded-lg mb-[30px]"
                onClick={() => fetchData(searchWord)}>
                Generate
            </button>
        </div>
    )
}

export default SearchGIF