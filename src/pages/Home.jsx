import { useState, useEffect } from "react";
import AlbumList from "../components/AlbumList";
import SearchBar from "../components/SearchBar";
import { GoHome } from "react-icons/go";

const Home = () => {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await fetch(
          "https://neuefische-spotify-proxy.vercel.app/api/featured",
        );
        const data = await response.json();
        setAlbums(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchAlbums();
  }, []);
  const filteredData = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase()),
  );
  console.log(filteredData);

  return (
    <section className="min-h-screen w-full">
      <h1 className="flex items-center justify-center pt-6 text-[30px] ">
        <GoHome className="" />
        Home
      </h1>
      <SearchBar onChange={handleChange} search={search} />
      <AlbumList albums={filteredData} />
    </section>
  );
};

export default Home;
