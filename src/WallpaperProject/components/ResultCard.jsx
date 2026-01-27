const ResultCard = ({ item }) => {
  return (
    <div className="w-[17vw] relative h-80 rounded-xl overflow-hidden">
      <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer h-full"
          >
        {item.type === "photo" ? (
          <img
            className="w-full h-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom-text"
        className="absolute flex gap-3 justify-between items-center w-full px-4 py-6 text-white bottom-0"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h2>
        <button className="bg-blue-600 active:scale-95 font-medium rounded py-1 px-3 cursor-pointer">save</button>
      </div>
    </div>
  );
};

export default ResultCard;
