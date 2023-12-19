import { LogoutMenuSvg, ProfileSvg, UsersSvg } from "../svg/svg-menu";
import { SvgIconComponent } from "../types/svgIconComponsets";


export interface IChildren {
  title: string;
  path: string;
  Icon: SvgIconComponent;
}

export interface Iitem {
  title: string;
  elem: string;
  path?: string;
  Icon: SvgIconComponent;
  children?: IChildren[];
}

export const menuSideBarList: Iitem[] = [
  {
    title: "Profile",
    path: "/account",
    elem: "profile",
    Icon: ProfileSvg,
  },
  {
    title: "Accounts",
    path: "/people",
    elem: "users",
    Icon: UsersSvg,
  },
  {
    title: "Logout",
    path: "/logout",
    elem: "logout",
    Icon: LogoutMenuSvg,
  },
];
