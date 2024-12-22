import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({
  title,
  poster_path,
  original_language,
  id,
  vote_average,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-56 text-white rounded-lg shadow-md overflow-hidden opacity-100 transition-transform hover:scale-105">
      <img
        onClick={() => navigate(`/movie/${id}`)}
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden">
          {title}
        </h3>
        <h3 className="text-lg font-semibold whitespace-nowrap overflow-hidden">
         Rating: {vote_average}
        </h3>
        <p className="text-sm mt-1">
          Language: {original_language.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
