const Input = () => {
  return (
    <form className="flex gap-2 justify-center">
      <input
        className="w-[80%] p-1 px-3 rounded-lg inset-shadow-sm inset-shadow-[rgb(0,0,0,0.3)] outline-0"
        type="text"
      />
      <button
        type="submit"
        className="py-2 px-3 rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-medium transition-colors cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
