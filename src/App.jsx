import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("fitness");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch images function
  const fetchImages = async (keyword) => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query: keyword, per_page: 12 },
        headers: {
          Authorization: `Client-ID jkFwzwtlhESUi0GGoDDhdOkYGyaOwfOCVsDnau7HQX8`, // Replace this
        },
      });
      setImages(res.data.results);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Automatically fetch fitness images when app loads
  useEffect(() => {
    fetchImages("fitness");
  }, []);

  // ✅ Manual search form
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchImages(query);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        🏋️‍♂️ Fitness Image Gallery
      </h1>

      <form onSubmit={handleSearch} className="flex w-full max-w-md mb-6 shadow-md">
        <input
          type="text"
          placeholder="Search images (e.g., workout, gym, yoga)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-r-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-600">Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {images.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
          >
            <img
              src={img.urls.small}
              alt={img.alt_description}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
