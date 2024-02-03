import { Routes, Route, } from "react-router-dom";

import CurrentMovie from "@/pages/CurrentMovie/CurrentMovie";
import Favorites from "@/pages/Favorites/Favorites";
import Main from "@/pages/Main/Main";
import PersonalArea from "@/pages/PersonalArea/PersonalArea";
import NotFound from "@/pages/NotFound/NotFound";
import { Path } from "./RouteLines";

export const RouteList = () => {
  return (
    <>
      <Routes>
        <Route path={Path.Main} element={<Main />}></Route>
        <Route path={Path.NotFound} element={<NotFound />}></Route>
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