import { useEffect } from "react";

const SelectedOptions = ({ selected, setSelected, setOptions }: any) => {
  useEffect(() => {
    console.log({ selected });
  }, [selected]);

  const style = {
    backgroundColor: selected.correct ? "green" : "red",
  };

  const handleClick = () => {
    setOptions((prev: any) => {
      const clone = prev.map((e: any) => {
        if (e.word === selected.word) {
          return { ...e, state: false };
        }
        return e;
      });

      return clone;
    });

    setSelected((prev: any) => {
      return prev.filter((e: any) => {
        return e.word !== selected.word;
      });
    });
  };

  return (
    <div
      onClick={handleClick}
      className="border border-slate-400 rounded-lg p-2"
      style={style}
    >
      {selected.word}
    </div>
  );
};

export default SelectedOptions;
