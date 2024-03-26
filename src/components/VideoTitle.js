const VideoTitle = ({ movie }) => {
  const { original_title, overview } = movie;
  return (
    <div className="pt-[15%] px-24 absolute bg-gradient-to-r from-black text-white aspect-video">
      <h1 className=" text-4xl font-bold">{original_title}</h1>
      <p className="text-md w-1/4 py-2">{overview}</p>
      <button className="font-bold text-lg bg-white text-black rounded-lg py-2 px-3 hover:bg-opacity-65">
        ▶️ Play
      </button>
      <button className="font-bold text-lg bg-gray-600 text-white rounded-lg opacity-70 mx-4 py-2 px-3 hover:bg-opacity-65">
        ℹ️ More Info
      </button>
    </div>
  );
};

export default VideoTitle;
