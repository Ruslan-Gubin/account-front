import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AccountsPage, Home, ProfileEditPage, ProfilePage } from "../../pages";
import { Layout } from "../../widgets";
import { NotFound } from "../../widgets/not-found/NotFound";
import { NAV } from "./nav-links";

export const routerApp = createBrowserRouter(

  createRoutesFromElements(
    <Route path={NAV.MAIN} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={NAV.ACCOUNT} element={<ProfilePage />}  />
      <Route path={NAV.ACCOUNT_EDIT} element={<ProfileEditPage/>} />
      <Route path={NAV.PEOPLE} element={<AccountsPage />}  />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
