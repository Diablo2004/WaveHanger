import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/loading/img";
import ContentWrapper from "../../../components/contentwrap/contentwrap";

const Banner = () => {
  const [bg, setBg] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/popular");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const background =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBg(background);
  }, [data]);

  const handleSearchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='heroBanner'>
      {!loading && bg && (
        <div className='backdrop-img'>
          <Img src={bg} />
        </div>
      )}
      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='wrapper'>
          <div className='heroBannerContent'>
            <span className='title'>Welcome</span>
            <span className='subTitle'>
              Discover millions of movies, TV shows, and individuals waiting to
              be explored. Begin your exploration now.
            </span>
            <div className='searchInput'>
              <input
                type='text'
                placeholder='Explore movies or TV shows by searching...'
                onKeyUp={handleSearchQuery}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
