import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import { Loader } from "lucide-react";

const API_KEY = "jLTEx0toLAlQTW6vcjuFD518ufJsR0nZxGrOyKFEI3lUK5PPL8JcUAMq";

// const API = "https://api.pexels.com/v1/search?page=1&per_page=12&query=car";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("Nature");
  const [search, setSearch] = useState("Nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const { data } = await axios(
          `https://api.pexels.com/v1/search?page=${page}&per_page=12&query=${query}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          },
        );
        setApiData((prev) => [...prev, ...data?.photos]);
        setLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiData([]);
    setQuery(search);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const download = (url) => {
    let a = document.createElement("a");
    a.href = url;
    a.target = "blank";
    a.click();
    a.remove();
    console.log(url);
  };

  // if (loading) {
  //   return <h1 className="text-4xl">Loading...</h1>;
  // }
  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="text-center text-5xl text-blue-600 font-semibold">
        📸Image Gallery - {query}
      </h1>
      <Searchbar handleSubmit={handleSubmit} setSearch={setSearch} />

      {loading ? (
        <div className="text-rose-500 flex justify-center items-center animate-spin">
          <Loader size={80} />
        </div>
      ) : (
        <Card apiData={apiData} download={download} />
      )}
      <div className="w-full flex justify-center">
        <button
          onClick={loadMore}
          className="bg-rose-500 px-12 py-3 text-white rounded-2xl font-bold active:scale-90 duration-400"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default App;
