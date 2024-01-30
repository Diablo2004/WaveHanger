import ContentWrapper from "../../../components/contentwrap/contentwrap";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import { useState } from "react";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className='suggestionSection'>
      <ContentWrapper>
        <span className='suggestionTitle'>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
