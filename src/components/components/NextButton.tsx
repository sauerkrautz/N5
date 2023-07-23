import { useSwiper } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";

const NextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {" "}
      <p className="text-4xl text-white">
        <AiOutlineArrowRight />
      </p>{" "}
    </button>
  );
};

export default NextButton;
