const Options = ({
  validate,
  option,
  setOptions,
  setSelected,
  selected,
}: any) => {
  const handleClick = () => {
    setOptions((prev: any) => {
      return prev.map((e: any) => {
        if (e.word === option.word) {
          return { ...e, state: true };
        }

        return e;
      });
    });

    setSelected((prev: any) => {
      if (selected.length > 3) {
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
