import { useSwiper } from "swiper/react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const PreviousButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      {" "}
      <p className="text-5xl text-white">
        <BsFillArrowLeftSquareFill />
      </p>{" "}
    </button>
  );
};

export default PreviousButton;
