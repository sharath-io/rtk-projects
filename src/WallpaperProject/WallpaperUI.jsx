import ResultGrid from "./components/ResultGrid";
import Searchbar from "./components/Searchbar";
import Tabs from "./components/Tabs";

const WallpaperUI = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 ">
      <Searchbar />
      <Tabs/>
      <ResultGrid/>
    </div>
  );
};

export default WallpaperUI;
