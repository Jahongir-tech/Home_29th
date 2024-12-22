import React, { useEffect, useState } from "react";
import Movies from "../../components/movies/Movies";
import { request } from "../../api";
import { Carousel } from "../../components/Swiper/Carousel";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await request("/discover/movie");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data && <Carousel data={data} />}
      {data && <Movies data={data} />}
    </div>
  );
};

export default Home;
