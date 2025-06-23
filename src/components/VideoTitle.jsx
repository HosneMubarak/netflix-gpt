import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-gray-200 w-1/3">{overview}</p>

      <div className="flex gap-4">
        {/* Play Button */}
        <button className="flex items-center gap-2 bg-white text-black font-semibold py-2 px-6 text-lg rounded hover:bg-gray-200 transition">
          <span className="text-xl">▶</span>
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white font-semibold py-2 px-6 text-lg rounded hover:bg-opacity-90 transition">
          <span className="text-xl">ℹ</span>
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
