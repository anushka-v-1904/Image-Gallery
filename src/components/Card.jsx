import React from "react";

const Card = ({ apiData, download }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {apiData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 duration-300"
        >
          <img
            src={item.src.medium}
            alt="img"
            className="w-full h-40 sm:h-48 md:h-52 object-cover"
          />

          <div className="p-3 flex flex-col gap-2">
            <p className="text-xs sm:text-sm font-semibold">
              {item.photographer}
            </p>

            <button
              onClick={() => download(item.src.original)}
              className="bg-blue-500 text-white py-2 rounded-lg text-xs sm:text-sm"
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
