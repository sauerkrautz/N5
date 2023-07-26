import { useEffect, useState } from "react";

const SelectedOptions = ({
  selected,
  setSelected,
  setOptions,
  validate,
}: any) => {
  const [color, setColor] = useState<boolean>();

  useEffect(() => {
    console.log({ selected });
    setColor(selected.correct);
  }, [selected]);

  const style = {
    backgroundColor: color ? "green" : "red",
  };

  const handleClick = () => {
    setOptions((prev: any) => {
      const clone = prev.map((e: any) => {
        if (e.word === selected.word && e.order === selected.order) {
          return { ...e, state: false };
        }
        return e;
      });

      return clone;
    });

    setSelected((prev: any) => {
      return prev.filter((e: any) => {
        return e.order !== selected.order;
      });
    });

    validate();
  };

  return (
    <div
      onClick={handleClick}
      className="border border-slate-400 rounded-lg p-2 transition-colors duration-100 "
      style={style}
    >
      {selected.word}
    </div>
  );
};

export default SelectedOptions;
