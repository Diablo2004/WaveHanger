import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentwrap/contentwrap";
import Img from "../loading/img";
import Poster from "../../assets/poster.png";
import CircleRating from "../Rating/Rating";
import Genre from "../genres/Genre";

import "./style.scss";
const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const skItem = () => {
    return (
      <div className='skeletonItem'>
        <div className='posterBlock skeleton'></div>
        <div className='textBlock'>
          <div className='title skeleton'></div>
          <div className='date skeleton'></div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel'>
      <ContentWrapper>
        {title && <div className='carouselTitle'>{title}</div>}
        <BsFillArrowLeftCircleFill
          className='carouselLeftNav arrow'
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className='carouselRightNav arrow'
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div ref={carouselContainer} className='carouselItems'>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : Poster;
              return (
                <div
                  key={item.id}
                  className='carouselItem'
                  onClick={() =>
                    navigate(`/${item?.media_type || endpoint}/${item?.id}`)
                  }
                >
                  <div className='posterBlock'>
                    <Img src={posterUrl} />

                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genre data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className='textBlock'>
                    <span className='title'>{item.title || item.name}</span>
                    <span className='date'>
                      {item?.release_date &&
                        dayjs(item.release_date).format("MMM DD, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='lodaingSkeleton'>
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
