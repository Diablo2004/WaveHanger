import "./style.scss";
import Banner from "./banner.jsx/banner";
import Trending from "./Trending/trending";
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
