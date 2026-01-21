import { Provider } from "react-redux";
import WallpaperUI from "./WallpaperUI";
import { store } from "./redux/store";

const WallpaperApp = () => {
  return (
    <>
      <Provider store={store}>
        <WallpaperUI />
      </Provider>
    </>
  );
};

export default WallpaperApp;
