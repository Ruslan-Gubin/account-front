import { useAppDispatch } from "../../../shared";
import { useLayoutSelect, layoutAction} from "../model";


export function useToggleSideMenu() {
  const dispatch = useAppDispatch();

  async function toggleSideMenu({ value }: {value: boolean | null}) {
    dispatch(layoutAction.toggleMenuIsOpen({ value }))
  }

  return { toggleSideMenu };
}

export function useChangeMenuValue() {
  const dispatch = useAppDispatch();

  const changeMenu = (value: string) => {
   dispatch(layoutAction.changeMenuItemActive({ value }))
  }
  
  return { changeMenu };
}

export function useSideIsOpen() {
  const { sideBarSubMenuOpen } = useLayoutSelect()

  return { isOpen: sideBarSubMenuOpen };
}


