import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random(){

    const {gif, loading, fetchData} = useGif();

    return(
        <div className='w-1/2  random-gif-bg rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='gif-heading mt-[15px] text-2xl underline uppercase font-bold'> 
                Random GIF
            </h1>

            {
                loading ? (<Spinner/>) : <img src={gif} width="450" className='gif-box border-double border-8 border-black'/>
            }
            {/* If loading is true then show the Spinner otherwise Show the GIF */}

            <button className="button w-7/12 bg-yellow-500 text-lg  rounded-lg mb-[30px]"
                onClick={() => fetchData()}>
                Generate
            </button>
        </div>
    )
}

export default Random;