import React from "react";

const Searchbar = ({ handleSubmit, setSearch }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        placeholder="Search value"
        className="outline-0 border-2 border-blue-600 px-10 py-1 rounded-l"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-linear-to-t from-sky-500 to-indigo-500 px-5 py-1.5 text-white rounded-r active:scale-80 duration-300 transition hover:scale-105"
      >
        search
      </button>
    </form>
  );
};

export default Searchbar;
