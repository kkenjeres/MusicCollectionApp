import React, { useState } from "react";
import AlbumList from "../components/AlbumList";
import SearchBar from "../components/SearchBar";
import { ImSpinner } from "react-icons/im";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (search) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${search}`,
        );
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="min-h-screen w-full">
      <h1 className="flex items-center justify-center pt-6 text-[30px] ">
        <IoSearchSharp className="" />
        Search
      </h1>

      <SearchBar
        onChange={handleChange}
        search={search}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <div className="fixed bottom-0 left-0 right-0 top-0 m-auto flex h-full items-center justify-center ">
          <ImSpinner className="h-[100px] w-[100px] animate-spin text-4xl text-[#1DB954]" />
        </div>
      ) : (
        <AlbumList albums={albums} />
      )}
    </section>
  );
};

export default Search;
