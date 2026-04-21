import { Download } from "lucide-react";
import React from "react";

const Card = ({ apiData, download }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-5 place-items-center">
      {apiData.map((item, index) => (
        <div
          key={index}
          className="w-70 h-70 rounded-xl hover:scale-105 duration-400 transition-all border overflow-hidden p-2"
        >
          <div className="w-full h-50">
            <img
              src={item?.src?.landscape}
              alt=""
              className="w-full h-full rounded"
            />
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-sm">name: {item?.photographer}</p>
            <button
              onClick={() => download(item?.src?.medium)}
              className="px-4 py-1 rounded-2xl active:scale-90 duration-400  text-indigo-700"
            >
              <Download />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
