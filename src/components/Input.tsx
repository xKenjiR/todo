import { useEffect, useRef } from "react";

interface Props {
  addList: (message: string) => void;
}

const Input = ({ addList }: Props) => {
  const text = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (text.current) text.current.focus();
  }, []);

  return (
    <form
      className="flex gap-2 justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (text.current && text.current.value) {
          addList(text.current.value);
          text.current.value = "";
          text.current.focus();
        }
      }}
    >
      <input
        ref={text}
        className="w-[80%] p-1 px-3 rounded-lg dark:bg-gray-500 dark:text-white inset-shadow-sm inset-shadow-[rgb(0,0,0,0.3)] transition-colors outline-0 font-medium"
        type="text"
        placeholder="things to do..."
      />
      <button
        type="submit"
        className="py-2 px-3 rounded-lg bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-colors cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
