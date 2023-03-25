const Avatar = ({ name, role }) => {
  name = "Faker";
  return (
    <div className="flex items-center">
      <h1>{name}</h1>
      <img
        className="border-2 border-white rounded-[30%]"
        src="https://cdnmedia.webthethao.vn/uploads/2023-03-22/doi-hinh-lck-mua-xuan-2023-t1.jpg"
        alt=""
      />
      <p>{role}</p>
      <button className="bg-red-400">Show info</button>
    </div>
  );
};

export default Avatar;
