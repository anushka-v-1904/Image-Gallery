import React from "react";

const Searchbar = ({ handleSubmit, setSearch }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 justify-center items-center"
    >
      <input
        type="text"
        placeholder="Search images..."
        onChange={(e) => setSearch(e.target.value)}
        className="border w-full md:w-1/2 px-4 py-2 rounded-lg outline-none"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full md:w-auto"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
