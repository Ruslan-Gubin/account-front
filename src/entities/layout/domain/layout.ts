

export interface LayoutModel  {
  sideBarSubMenuOpen: boolean;
  currentItemMenu: string;
}


class LayoutEntity {
  sideBarSubMenuOpen: boolean;
  currentItemMenu: string;

  constructor() {
      this.sideBarSubMenuOpen = false;
      this.currentItemMenu = ''
  }

 public get layoutInitState(): { sideBarSubMenuOpen: boolean, currentItemMenu: string } {
    return {
      sideBarSubMenuOpen: this.sideBarSubMenuOpen,
      currentItemMenu: this.currentItemMenu,
    };
  }

}

export const layoutEntity = new LayoutEntity()


