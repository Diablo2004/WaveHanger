import { useSelector } from "react-redux";
import "./style.scss";
const Genre = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className='genres'>
      {data?.map((g) => {
        if (!genres[g]?.name) return null;
        return (
          <div key={g} className='genre'>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
