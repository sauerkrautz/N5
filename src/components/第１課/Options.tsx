const Options = ({
  validate,
  option,
  setOptions,
  setSelected,
  selected,
}: any) => {
  const handleClick = () => {
    let optionLength: number = 3;
    setOptions((prev: any) => {
      return prev.map((e: any) => {
        if (e.word === option.word && e.order === option.order) {
          return { ...e, state: true };
        }

        optionLength = prev.length;

        return e;
      });
    });

    setSelected((prev: any) => {
      if (selected.length > optionLength) {
        return prev;
      } else {
        prev = [...prev, { ...option }];
        return prev;
      }
    });

    validate();
  };

  return (
    <button
      onClick={() => {
        return handleClick();
      }}
      disabled={option.state}
      className="border rounded-lg border-slate-400 p-2"
    >
      {option.word}
    </button>
  );
};

export default Options;
