import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NextButton from "../components/NextButton";
import PreviousButton from "../components/PreviousButton";

import "swiper/css";
import SelectedOptions from "./SelectedOptions";
import Options from "./Options";

interface Ioptions {
  word: string;
  state: boolean;
  order: number;
  correct: boolean;
}

const 第１課 = () => {
  const [selected, setSelected] = useState<Ioptions[]>([]);
  const [selected1, setSelected1] = useState<Ioptions[]>([]);

  const [options, setOptions] = useState<Ioptions[]>([
    { word: "は", state: false, order: 1, correct: false },
    { word: "ダダン", state: false, order: 2, correct: false },
    { word: "わたし", state: false, order: 0, correct: false },
    { word: "です", state: false, order: 3, correct: false },
  ]);

  const [options1, setOptions1] = useState<Ioptions[]>([
    { word: "は", state: false, order: 1, correct: false },
    { word: "ダダンさん", state: false, order: 0, correct: false },
    { word: "がくせい", state: false, order: 2, correct: false },
    { word: "ではありません", state: false, order: 3, correct: false },
  ]);

  useEffect(() => {
    // console.log({ orders: validate() });
    return () => {};
  }, [options]);

  const forceUpdate = () => {
    setOptions((prev) => {
      return prev.map((e: any) => {
        return e;
      });
    });
  };

  const validate = (choices: any, setChoices: any) => {
    const correctOrder = choices
      .map((e: any) => e.order)
      .sort((a: number, b: number) => a - b);
    setChoices((prev: any) => {
      return prev.map((e: any, i: number) => {
        if (e.order === correctOrder[i]) {
          return { ...e, correct: true };
        }
        return e;
      });
    });
  };

  return (
    <div className=" bg-[#353535] flex flex-col h-screen p-8 ">
      <div className="flex w-full justify-center">
        <h1 className="text-2xl bg-indigo-400 w-fit text-center text-white mb-8 rounded-lg p-2 ">
          第一課
        </h1>
      </div>
      <Swiper
        className="h-full w-full relative"
        slidesPerView={1}
        allowTouchMove={false}
        spaceBetween={50}
      >
        <SwiperSlide className=" text-white">
          <div
            className="border-[2px] flex flex-col rounded-lg p-3 border-solid
        border-slate-400"
          >
            <div>
              Partikel adalah kata penghubung kata benda dengan sesama kata
              benda maupun dengan kata kerja.
            </div>
            <br />
            <div>
              <span className="font-bold">は</span> adalah partikel yang
              menjelaskan keberadaan sebuah subyek dalam kalimat, contoh:
            </div>
            <br />
            <p>
              私 <span className="font-bold">は</span> 日本人です
            </p>
            <p>
              わたし <span className="font-bold">は</span> にほんじんです
            </p>
            <br />
            <p>
              Saya <span className="font-bold">adalah</span> orang jepang
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4">
          <h1 className="bg-rose-500 p-2 rounded-lg -mt-14 w-full text-center ">
            Latihan
          </h1>
          <div className="flex flex-wrap gap-2 -mt-10">
            {selected.map((e: any) => {
              return (
                <SelectedOptions
                  selected={e}
                  setOptions={setOptions}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-[10vh]">
            {options.map((e: any) => {
              return (
                <Options
                  validate={() => validate(options, setSelected)}
                  option={e}
                  setOptions={setOptions}
                  setSelected={setSelected}
                  selected={selected}
                />
              );
            })}
          </div>
        </SwiperSlide>

        <SwiperSlide className=" text-white">
          <div
            className="border-[2px] flex flex-col rounded-lg p-3 border-solid
        border-slate-400"
          >
            <div>
              Kalimat bentuk negatif dengan menggunakan{" "}
              <span className="font-bold">ではありません</span>
              atau <span className="font-bold">じゃありません</span>
            </div>
            <br />
            <div>
              <span className="font-bold">ではありまえん</span> menggantikan{" "}
              <span className="font-bold">です</span> yang ada pada kalimat
              positif dan merubah kalimat menjadi negatif, contoh:
            </div>
            <br />
            <p>
              私 <span className="font-bold">は</span> 日本人ではありません
            </p>
            <p>
              わたし <span className="font-bold">は</span>{" "}
              にほんじんじゃありません
            </p>
            <br />
            <p>
              Saya <span className="font-bold">bukan</span> orang jepang
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4">
          <h1 className="bg-rose-500 p-2 rounded-lg -mt-14 w-full text-center ">
            Latihan
          </h1>
          <div className="flex flex-wrap gap-2 -mt-[10vh]">
            {selected1.map((e: any) => {
              return (
                <SelectedOptions
                  selected={e}
                  setOptions={setOptions1}
                  setSelected={setSelected1}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {options1.map((e: any) => {
              return (
                <Options
                  validate={() => validate(options1, setSelected1)}
                  option={e}
                  setOptions={setOptions1}
                  setSelected={setSelected1}
                  selected={selected1}
                />
              );
            })}
          </div>
        </SwiperSlide>

        <SwiperSlide className=" text-white">
          <div
            className="border-[2px] flex flex-col rounded-lg p-3 border-solid
        border-slate-400"
          >
            <div>
              Kalimat tanya dengan menggunakan akhiran{" "}
              <span className="font-bold">ですか</span>. Digunakan sebagai
              penanda kalimat tanya, contoh:
            </div>
            <br />

            <p>
              あなた は <span className="font-bold">だれ ですか</span>
            </p>

            <br />
            <p>
              Kamu <span className="font-bold">siapa</span>
            </p>
          </div>
        </SwiperSlide>

        <div className="absolute top-[70vh] z-50 flex w-full justify-between px-8 items-center">
          <PreviousButton />
          <NextButton />
        </div>
      </Swiper>
    </div>
  );
};

export default 第１課;
