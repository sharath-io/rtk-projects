import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoading());
      let data = [];
      if (activeTab === "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
          url: item.links.download,
        }));
      }
      if (activeTab === "videos") {
        let response = await fetchVideos(query);
        data = response.data.videos.map((item) => ({
          id: item.id,
          type: "video",
          title: item.user.name || "video",
          src: item.video_files[0].link,
          url: item.url,
        }));
      }
      dispatch(setResults(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  useEffect(() => {
    if (!query) return;
    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((result, index) => {
        return (
          <div key={index}>
            <ResultCard item={result} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
