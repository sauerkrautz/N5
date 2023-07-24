import { useSwiper } from "swiper/react";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {" "}
      <p className="text-5xl text-white">
        <BsFillArrowRightSquareFill />
      </p>{" "}
    </button>
  );
};

export default NextButton;
