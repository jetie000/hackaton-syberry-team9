import { Routes, Route } from "react-router-dom";

import { Path } from "./RouteLines";
import Main from "../pages/Main/Main";
import Notfound from "../pages/Notfound/Notfound";
import Favorites from "../pages/Favorites/Favorites";
import CurrentMovie from "../pages/CurrentMovie/CurrentMovie";
import PersonalArea from "../pages/PersonalArea/PersonalArea";

export const RouteList = () => {
  return (
    <>
      <Routes>
        <Route path={Path.Main} element={<Main />}></Route>
        <Route path={Path.NotFound} element={<Notfound />}></Route>
        <Route path={Path.Favorites} element={<Favorites />}></Route>
        <Route
          path={Path.CurrentMovie + "/movieid"}
          element={<CurrentMovie />}
        ></Route>
        <Route path={Path.PersonalArea} element={<PersonalArea />}></Route>
      </Routes>
    </>
  );
};
