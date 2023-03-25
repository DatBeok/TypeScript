import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const handlePlay = () => {
    setValue("X");
  };
  return (
    <button
      className="bg-[#14bdac] border-0 h-[100px] w-[100px] text-[50px] text-white"
      onClick={handlePlay}
    >
      {value}
    </button>
  );
};

export default Square;
