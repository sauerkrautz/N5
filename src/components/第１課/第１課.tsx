import { useState } from "react";
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
  const [selected2, setSelected2] = useState<Ioptions[]>([]);
  const [selected3, setSelected3] = useState<Ioptions[]>([]);
  const [selected4, setSelected4] = useState<Ioptions[]>([]);

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

  const [options2, setOptions2] = useState<Ioptions[]>([
    { word: "は", state: false, order: 1, correct: false },
    { word: "あのひと", state: false, order: 0, correct: false },
    { word: "です", state: false, order: 3, correct: false },
    { word: "だれ", state: false, order: 2, correct: false },
    { word: "か", state: false, order: 4, correct: false },
  ]);

  const [options3, setOptions3] = useState<Ioptions[]>([
    { word: "は", state: false, order: 1, correct: false },
    { word: "あのひと", state: false, order: 0, correct: false },
    { word: "です", state: false, order: 3, correct: false },
    { word: "がくせい", state: false, order: 2, correct: false },
    { word: "がくせい", state: false, order: 6, correct: false },
    { word: "です", state: false, order: 7, correct: false },
    { word: "わたし", state: false, order: 4, correct: false },
    { word: "も", state: false, order: 5, correct: false },
  ]);

  const [options4, setOptions4] = useState<Ioptions[]>([
    { word: "は", state: false, order: 1, correct: false },
    { word: "あのひと", state: false, order: 0, correct: false },
    { word: "の", state: false, order: 3, correct: false },
    { word: "インドネシア", state: false, order: 2, correct: false },
    { word: "じっしゅうせい", state: false, order: 4, correct: false },
    { word: "です", state: false, order: 5, correct: false },
  ]);

  const validate = (choices: any, setChoices: any) => {
    const clone = [...choices];

    const sortedOptions = clone.sort((a: any, b: any) => {
      return a.order - b.order;
    });

    setChoices((prev: any) => {
      return prev.map((e: any, i: number) => {
        if (e.word === sortedOptions[i].word) {
          return { ...e, correct: true };
        } else {
          return { ...e, correct: false };
        }
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
        allowTouchMove={false}
        slidesPerView={1}
        spaceBetween={50}
      >
        {/* First */}
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
              <ruby>
                私 <rt>わたし</rt>
              </ruby>
              <span className="font-bold">は</span>
              <ruby>
                日本人 <rt>にほんじん</rt>
              </ruby>
              です
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
                  validate={() => validate(options, setSelected)}
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

        {/* second */}
        <SwiperSlide className=" text-white">
          <div className="border-[2px] flex flex-col rounded-lg p-3 border-solid border-slate-400">
            <div>
              Kalimat bentuk negatif dengan menggunakan
              <span className="font-bold">ではありません </span>
              atau <span className="font-bold">じゃありません</span>
            </div>
            <br />
            <div>
              <span className="font-bold">ではありません</span> menggantikan
              <span className="font-bold">です</span> yang ada pada kalimat
              positif dan merubah kalimat menjadi negatif, contoh:
            </div>
            <br />
            <p>
              <ruby>
                私 <rt>わたし</rt>
              </ruby>
              <span className="font-bold"> は </span>
              <ruby>
                日本人 <rt>にほんじん</rt>
              </ruby>
              <span className="font-bold"> ではありません </span>
            </p>
            <br />
            <p>
              Saya <span className="font-bold">bukan</span> orang jepang
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4 mb-[5vh] ">
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
                  validate={() => validate(options1, setSelected1)}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-14">
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

        {/* third */}
        <SwiperSlide className=" text-white">
          <div className="border-[2px] flex flex-col rounded-lg p-3 border-solid border-slate-400">
            <div>
              Kalimat tanya dengan menggunakan akhiran
              <span className="font-bold">ですか</span>.
              <span className="font-bold"> ですか</span> tidak bisa berdiri
              sendiri. Digunakan sebagai penanda kalimat tanya, contoh:
            </div>
            <br />

            <p>
              あなた は <span className="font-bold">だれ です か</span>
            </p>

            <br />
            <p>
              Kamu <span className="font-bold">siapa</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4 mb-[5vh] ">
          <h1 className="bg-rose-500 p-2 rounded-lg -mt-14 w-full text-center ">
            Latihan
          </h1>
          <div className="flex flex-wrap gap-2 -mt-[10vh]">
            {selected2.map((e: any) => {
              return (
                <SelectedOptions
                  selected={e}
                  setOptions={setOptions2}
                  setSelected={setSelected2}
                  validate={() => validate(options2, setSelected2)}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-14">
            {options2.map((e: any) => {
              return (
                <Options
                  validate={() => validate(options2, setSelected2)}
                  option={e}
                  setOptions={setOptions2}
                  setSelected={setSelected2}
                  selected={selected2}
                />
              );
            })}
          </div>
        </SwiperSlide>

        {/* fourth */}
        <SwiperSlide className=" text-white">
          <div className="border-[2px] flex flex-col rounded-lg p-3 border-solid border-slate-400">
            <div>
              Partikel <span className="font-bold">も</span> yang dapat
              diartikan sebagai <span className="font-bold">juga</span>.
              Digunakan ketika suatu subjek memiliki kesamaan dengan subjek lain
              untuk mengekspresikan kesamaan antara kedua atau lebih subjek,
              contoh:
            </div>
            <br />
            <p>
              <ruby>あなた</ruby>
              <span className="font-bold"> は </span>
              <ruby>
                学生 <rt>がくせい</rt>
              </ruby>
              <span className="font-bold">です</span>、
              <ruby>
                私 <rt>わたし</rt>
              </ruby>
              <span className="font-bold"> も </span>
              <ruby>
                学生 <rt>がくせい</rt>
              </ruby>
              です
            </p>
            <br />
            <p>
              Anda adalah pelajar, saya <span className="font-bold">juga</span>
              pelajar
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4 mb-[5vh] ">
          <h1 className="bg-rose-500 p-2 rounded-lg -mt-14 w-full text-center ">
            Latihan
          </h1>
          <div className="flex flex-wrap gap-2 -mt-[10vh]">
            {selected3.map((e: any) => {
              return (
                <SelectedOptions
                  selected={e}
                  setOptions={setOptions3}
                  setSelected={setSelected3}
                  validate={() => validate(options3, setSelected3)}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-14">
            {options3.map((e: any) => {
              return (
                <Options
                  validate={() => validate(options3, setSelected3)}
                  option={e}
                  setOptions={setOptions3}
                  setSelected={setSelected3}
                  selected={selected3}
                />
              );
            })}
          </div>
        </SwiperSlide>

        {/* fifth */}
        <SwiperSlide className=" text-white">
          <div
            className="border-[2px] flex flex-col rounded-lg p-3 border-solid
        border-slate-400"
          >
            <div>
              Partikel <span className="font-bold">の</span> yang digunakan
              untuk menghubungkan dua kata benda dan sebagai tanda kepemilikan.
            </div>
            <br />
            <p>
              <span>これ は </span>
              <ruby>
                私 <rt>わたし</rt>
              </ruby>
              <span className="font-bold"> の </span>
              <ruby>
                靴 <rt>くつ</rt>
              </ruby>
              <span> です</span>
            </p>
            <br />
            <p>Ini adalah sepatu saya</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex flex-col justify-between items-center p-3 text-white py-16 px-4 mb-[5vh] ">
          <h1 className="bg-rose-500 p-2 rounded-lg -mt-14 w-full text-center ">
            Latihan
          </h1>
          <div className="flex flex-wrap gap-2 -mt-[10vh]">
            {selected4.map((e: any) => {
              return (
                <SelectedOptions
                  selected={e}
                  setOptions={setOptions4}
                  setSelected={setSelected4}
                  validate={() => validate(options4, setSelected4)}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2 mb-14">
            {options4.map((e: any) => {
              return (
                <Options
                  validate={() => validate(options4, setSelected4)}
                  option={e}
                  setOptions={setOptions4}
                  setSelected={setSelected4}
                  selected={selected4}
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
              <span>Menanyakan umur dengan kata tanya apa </span>
              <span className="font-bold">
                <ruby>
                  何 <rt>なん</rt> さい
                </ruby>
              </span>
              <span>
                {" "}
                digunakan dalam situasi non-formal atau kepada lawan bicara yang
                setara dan lebih muda.{" "}
              </span>
              <span>
                Untuk menanyakan umur kepada orang yang lebih tua, bisa
                menggunakan{" "}
              </span>
              <span className="font-bold">
                <ruby>おいくつ</ruby>
              </span>
              <span>, contoh:</span>
            </div>
            <br />
            <p>
              <ruby>あなた</ruby>
              <span> は </span>
              <ruby>
                何 <rt>なん</rt>
              </ruby>
              <span> さい ですか</span>
            </p>
            <p>
              <ruby>あなた</ruby>
              <span> は </span>
              <ruby>おいくつ</ruby>
              <span> ですか</span>
            </p>
            <br />
            <p>Umur kamu berapa</p>
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
