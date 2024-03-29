const VideoTitle = ({ movie }) => {
  const { original_title, overview } = movie;
  return (
    <div className="pt-[20%] md:pt-[12%] px-6 md:px-24 absolute bg-gradient-to-r from-black text-white aspect-video">
      <h1 className="text-2xl md:text-4xl font-bold">{original_title}</h1>
      <p className="hidden md:inline-block text-sm md:text-base text- w-3/4 md:w-1/4 py-2">
        {overview}
      </p>
      <div>
        <button className="font-bold text-lg bg-white text-black rounded-lg py-1 md:py-2 px-1 md:px-3 my-2 mb-20 hover:bg-opacity-65">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block font-bold text-lg bg-gray-600 text-white rounded-lg opacity-70 my-6 mx-4 py-2 px-3 hover:bg-opacity-65">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
