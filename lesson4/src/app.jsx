import { useState } from "react";
// import Avatar from "./componens/avatar";

// Props: Là một đối tượng, truyền dữ liệu từ cha xuống con
// Props: Immuatable

const App = function () {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      count:{count}
      <button className="border bg-red-400" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default App;
