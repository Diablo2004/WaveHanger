import "./style.scss";
import Banner from "./banner.jsx/Banner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/topRated";
const Home = () => {
  return (
    <div className='homePage'>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
      <div> </div>
    </div>
  );
};

export default Home;
