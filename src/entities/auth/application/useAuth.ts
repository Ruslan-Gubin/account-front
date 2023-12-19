import {  useAppDispatch, useNavigationReact,  } from "../../../shared";
import { useActiveNotification } from "../../notification";
import { AuthStorageService } from "../domen/service";
import { AuthorizationInput, EditUserInput, RegistrationUserInput } from '../DTO/auth-dto';
import { authAction, useAuthSelect } from "../model";
import { fetchAuthorization, fetchRegistration, fetchEditUser } from "../model/thunk";

const authStorageService = new AuthStorageService()

export function useRegistration() {
  const dispatch = useAppDispatch();
  const { activeNotification } = useActiveNotification();
  const { error } = useAuthSelect()
  const navigate = useNavigationReact()

  const registration = async (payload: RegistrationUserInput) => {
  const authResponse = await dispatch(fetchRegistration(payload))

  if (authResponse.meta.requestStatus === 'fulfilled') {
    const loginUserName = typeof authResponse?.payload !== 'string' &&  authResponse?.payload?.name
    
    if (loginUserName) {
      dispatch(authAction.setToogleModal())
      navigate.router('/account')
      activeNotification({ status: 'success', message: `Welcome ${loginUserName}` })
   }
  } 
  if (authResponse.meta.requestStatus === 'rejected') {
      activeNotification({ status: 'error', message: `Error ${error}` })
  }
  }

  return { registration };
}

export function useFetchAuthorization() {
  const dispatch = useAppDispatch();
  const navigate = useNavigationReact()
  const { activeNotification } = useActiveNotification()

  const handleAuthorization = async(payload: AuthorizationInput) => {

    const validationFields = authStorageService.loginAuth(payload)

    if (!validationFields) return;

   const authResponse = await dispatch(fetchAuthorization(validationFields))

   if (authResponse.meta.requestStatus === 'fulfilled') {
     const loginUserName = typeof authResponse?.payload !== 'string' &&  authResponse?.payload?.name
     
     if (loginUserName) {
       dispatch(authAction.setToogleModal())
       navigate.router('/account')
       activeNotification({ status: 'success', message: `Welcome ${loginUserName}` })
    }
   }

  }

  return { handleAuthorization };
}

export function useEditUser() {
  const dispatch = useAppDispatch();
  const { activeNotification } = useActiveNotification();

  const editUser = async (arg: EditUserInput) => {
  const response = await dispatch(fetchEditUser(arg))

  if (response.meta.requestStatus === 'fulfilled') {
      activeNotification({ status: 'success', message: `The data has been successfully updated` })
  }
  }

  return { editUser };
}

export function useLogoutUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigationReact()

  const logoutUser = () => {
    dispatch(authAction.logoutAuth())
    navigate.router('push')
  }

  return { logoutUser };
}

export function useAuth() {
  const { authorization } = useAuthSelect();

  return { authorization };
}

export function useRefreshErrorText() {
  const dispatch = useAppDispatch();

  const refreshErrorText = () => {
    dispatch(authAction.refreshErrorText())

  }

  return { refreshErrorText };
}

export function useToggleRemember() {
  const dispatch = useAppDispatch();

  const toggleRemember = () => {
    dispatch(authAction.rememberToggle())

  }

  return { toggleRemember };
}

export function useRememberUser() {
  const dispatch = useAppDispatch();

  const rememberUser = (payload: { username: string | null, password: string | null}) => {
    dispatch(authAction.rememberUser(payload))
  }

  return { rememberUser };
}

export function useIsModalOpen() {
  const dispatch = useAppDispatch();

  const toggleModal = () => {
    dispatch(authAction.setToogleModal())
  }

  return { toggleModal };
}

export function useIsLogoutModalOpen() {
  const dispatch = useAppDispatch();

  const toggleLogoutModal = () => {
    dispatch(authAction.setToogleLogoutModal())
  }

  return { toggleLogoutModal };
}
