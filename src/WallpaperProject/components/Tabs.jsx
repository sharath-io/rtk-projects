import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const currentActiveTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="py-10 px-14 flex gap-5 ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-2 px-3 rounded border-2 transition cursor-pointer text-xl uppercase active:scale-95 ${currentActiveTab === tab ? "bg-emerald-600" : "bg-gray-200"}`}
          onClick={() => dispatch(setActiveTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
