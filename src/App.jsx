import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import { Loader } from "lucide-react";

const API_KEY = "jLTEx0toLAlQTW6vcjuFD518ufJsR0nZxGrOyKFEI3lUK5PPL8JcUAMq";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("Nature");
  const [search, setSearch] = useState("Nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await axios(
          `https://api.pexels.com/v1/search?page=${page}&per_page=12&query=${query}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        setApiData((prev) => [...prev, ...(data?.photos || [])]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiData([]);
    setPage(1);
    setQuery(search);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const download = async (url) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `image-${Date.now()}.jpg`;
      a.click();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 md:px-10 flex flex-col gap-6 md:gap-10">

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600 font-semibold">
        📸 Image Gallery - {query}
      </h1>

      {/* Search */}
      <Searchbar handleSubmit={handleSubmit} setSearch={setSearch} />

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center animate-spin text-rose-500">
          <Loader size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
        </div>
      )}

      {/* Cards */}
      {!loading && <Card apiData={apiData} download={download} />}

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={loadMore}
          className="bg-rose-500 w-full sm:w-auto px-6 sm:px-10 py-3 text-white rounded-xl font-bold active:scale-90 duration-300"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default App;
