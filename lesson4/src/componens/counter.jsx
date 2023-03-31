const { useState, useEffect } = require("react");

const Counter = () => {
  const [count, setCount] = useState(10);
  const [image, setImage] = useState(null);

  const handleShowImage = async () => {
    const data = await fetch("https://picsum.photos/200/300");
    setImage(data.url);
  };

  useEffect(() => {
    setCount(count + 1);
  }, []);

  // Render 1
  return (
    <>
      <h1>Count:{count}</h1>
      <img src={image} />
      <button className="bg-blue-500" onClick={() => setCount(count + 1)}>
        + count
      </button>
    </>
  );
};
export default Counter;
