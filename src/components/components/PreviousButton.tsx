import { useSwiper } from "swiper/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PreviousButton = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      {" "}
      <p className="text-4xl text-white">
        <AiOutlineArrowLeft />
      </p>{" "}
    </button>
  );
};

export default PreviousButton;
