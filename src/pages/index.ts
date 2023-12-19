import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const ProfilePage = lazy(() => import("./profile/ProfilePage"));
export const ProfileEditPage = lazy(
  () => import("./profile-edit/ProfileEditPage")
);
export const AccountsPage = lazy(() => import("./accounts/AccountsPage"));
