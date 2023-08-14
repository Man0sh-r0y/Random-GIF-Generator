import RandomGIF from './components/RandomGIF'
import SearchGIF from './components/SearchGIF'

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      {/* Random GIF heading */}
      <h1 className=" header text-white rounded-lg w-9/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold ">
        Random GIF 
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        {/* Random GIF component */}
        <RandomGIF /> {/* Here Random GIF will be generated */}
        {/* Search GIF component */}
        < SearchGIF /> {/* Here we can search GIF */}
      </div>
    </div>
  )
}
